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

}

module.exports = new RoomController()

