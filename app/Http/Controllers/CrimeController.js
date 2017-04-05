'use strict'

let Crime = use('App/Model/Crime')

class CrimeController {

    constructor () {

    }

    * getAll (request, response) {

        let crimes = yield Crime.find(function (err) {
            if (err) return console.error(err)
        })

        response.json(crimes)
    }

    * get (request, response) {

        let id = request.param('id')
        let crime = yield Crime.findById({ _id: id }, function(err) {
            if (err) return console.error(err)
        })

        response.json(crime)
    }

    * getRandom (request, response) {

        yield Crime.findOneRandom(function (err, results) {
            if (err) return console.error(err)
            if (results) {
                response.json(results)
            }
        })
    }

}

module.exports = new CrimeController()
