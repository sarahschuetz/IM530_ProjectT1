'use strict'

class RoomController {

    constructor () {

    }

    * getAll (request, response) {

        // TODO: load from db

        response.json({'rooms' : 'room'});
    }

    * get (request, response) {

        // TODO: load from db
        const id = request.param('id')
        response.json({'room' : id})
    }

}

module.exports = new RoomController()

