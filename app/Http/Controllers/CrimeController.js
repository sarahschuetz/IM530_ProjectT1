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
        let id = request.param('id')
        let crime = yield Crime.findBy('_id', id)

        response.json(crime)
    }

    * getRandom (request, response) {
        let crimes = yield Crime.all()
        crimes = crimes.sort(function() {
            return .5 - Math.random()
        })

        let crime = crimes.slice(0, 1)
        response.json(crime)
    }

}

module.exports = new CrimeController()
