'use strict'

let Room = use('App/Model/Room')

class RoomController {

    constructor () {

    }

    * getAll (request, response) {
        let rooms = yield Room.all()

        response.json(rooms)
    }

    * get (request, response) {
        let id = request.param('id')
        let room = yield Room.findBy('_id', id)

        response.json(room)
    }

    * getRandom (request, response) {
        let rooms = yield Room.all()
        rooms = rooms.sort(function() {
            return .5 - Math.random()
        })

        let room = ''

        for (var room_data of rooms) {
            room = room_data
            break
        }
        response.json(room)
    }

}

module.exports = new RoomController()

