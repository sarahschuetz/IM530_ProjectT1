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
        let name = request.param('name')
        let room = yield Room.findBy({'name' : name})

        response.json(room)
    }

}

module.exports = new RoomController()

