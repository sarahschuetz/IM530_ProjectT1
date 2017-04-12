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
        let count = request.param('count')
        let crimes = yield Crime.all()

        crimes = crimes.sort(function() {
            return .5 - Math.random();
        })

        crimes = crimes.slice(0, count)

        response.json(crimes)
    }

}

module.exports = new CrimeController()
