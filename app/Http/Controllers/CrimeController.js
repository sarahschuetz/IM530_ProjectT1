'use strict'

class CrimeController {

    constructor () {

    }

    * getAll (request, response) {

        // TODO: load from db
        response.json({'crimes' : 'crimes'});
    }

    * get (request, response) {
        // TODO: load from db
        const id = request.param('id')
        response.json({'crime' : id})
    }

    * getRandom (request, response) {
        // TODO: load random crime from db
        response.json()
    }

}

module.exports = new CrimeController()
