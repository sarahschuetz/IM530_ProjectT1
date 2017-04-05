'use strict'

let Room = use('App/Model/Room')

class RoomController {

    constructor () {

    }

    * getAll (request, response) {

        let rooms = yield Room.find(function (err) {
            if (err) return console.error(err)
        })

        response.json(rooms)
    }

    * get (request, response) {

        let id = request.param('id')
        let room = yield Room.findById({ _id: id }, function(err) {
            if (err) return console.error(err)
        })

        response.json(room)
    }

}

module.exports = new RoomController()

