'use strict'

let Crime = use('App/Model/Crime')

class CrimeController {

    constructor () {

    }

    * getAll (request, response) {

        let crimes = yield Crime.all()

        response.json(crimes)
    }

    * get (request, response) {

        let name = request.param('name')
        let crime = yield Crime.findBy({'crime' : name})

        response.json(crime)
    }

    * getRandom (request, response) {


    }

}

module.exports = new CrimeController()
