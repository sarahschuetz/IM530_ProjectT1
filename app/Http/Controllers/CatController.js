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
            return .5 - Math.random();
        })

        cats = cats.slice(0, count)

        response.json(cats)

    }

    * talk (request, response) {
        let text = request.param('text')
        let name = request.param('name')

        let cat = yield Cat.findBy({'name' : name})

        // talk with specific cat
        let req = Apiai(cat.apiai).textRequest(text, {
            // TODO: use correct session-id
            sessionId : 'testsession'
        })

        req.on('response', function(res) {
            response.json(res)
        })

        req.on('error', function(error){
            return
        })

        req.end()
    }

}

module.exports = new CatController()
