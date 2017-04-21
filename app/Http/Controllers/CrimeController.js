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

        let crime = ''

        for (var crime_data of crimes) {
            crime = crime_data
            break
        }
        response.json(crime)
    }

}

module.exports = new CrimeController()
