'use strict'

class PersonController {

    constructor () {

    }

    * getAll (request, response) {

        // TODO: load from db
        response.json({'people' : 'persons'});
    }

    * get (request, response) {
        // TODO: load from db
        const id = request.param('id')
        response.json({'person' : id})
    }

    * getRandom (request, response) {
        // TODO: load random person from db
        response.json()
    }

}

module.exports = new PersonController()

