'use strict'

let Apiai = require('apiai')
let Cat = use('App/Model/Cat')


class CatController {

    constructor () {

    }

    * getAll (request, response) {
        let cats = yield Cat.all()

        response.json(cats)
    }

    * get (request, response) {
        let name = request.param('name')
        let cat = yield Cat.findBy({'name' : name})

        response.json(cat)
    }

    * getRandom (request, response) {
        let count = request.param('count')
        let cats = yield Cat.all()

        cats = cats.sort(function() {
            return .5 - Math.random()
        })

        if(count < Cat.count()) {
            cats = cats.slice(0, count)
        }

        response.send(cats)

    }

    * talk (request, response) {

        let params = request.all()
        let message = params.message
        let apiaiKey = params.apiaiKey
        let cat = params.cat

        // talk with specific cat
        let req = Apiai(apiaiKey).textRequest(message, {
            // TODO: use correct session-id
            sessionId : 'sessionId',
            originalRequest : {
                source : 'purr-purr-purr',
                data : {
                    cat : cat
                }
            }
        })

        req.on('response', function(res) {
            response.json(res.result.fulfillment.speech)
        })

        req.on('error', function(error){
            return
        })

        req.end()
    }

}

module.exports = new CatController()
