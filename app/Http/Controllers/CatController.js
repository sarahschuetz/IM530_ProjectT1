'use strict'

let Apiai = require('apiai')
let Cat = use('App/Model/Cat')
let Room = use('App/Model/Room')


class CatController {

    constructor () {

    }

    * getAll (request, response) {
        let cats = yield Cat.all()

        response.json(cats)
    }

    * get (request, response) {
        let id = request.param('id')
        let cat = yield Cat.findBy('_id', id)

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

    * setActualRoom (request, response) {
        let room_name = request.param('room')
        let room = yield Room.findBy({'name': room_name})

        let id = request.param('id')
        let cat = yield Cat.findBy('_id', id)

        cat.actual_room = room

        yield cat.save()
        response.status(200).send('Updated.')
    }

    * setCrimeRoom (request, response) {
        let room_name = request.param('room')
        let room = yield Room.findBy({'name': room_name})

        let id = request.param('id')
        let cat = yield Cat.findBy('_id', id)

        cat.crime_room = room

        yield cat.save()
        response.status(200).send('Updated.')
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
