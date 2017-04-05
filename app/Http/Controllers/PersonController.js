'use strict'

let Person = use('App/Model/Person')

class PersonController {

    constructor () {

    }

    * getAll (request, response) {

        let people = yield Person.find(function (err) {
            if (err) return console.error(err)
        })

        response.json(people)
    }

    * get (request, response) {

        let id = request.param('id')
        let person = yield Person.findById({ _id: id }, function(err) {
            if (err) return console.error(err)
        })

        response.json(person)
    }

    * getRandom (request, response) {

        yield Person.findOneRandom(function (err, results) {
            if (err) return console.error(err)
            if (results) {
                response.json(results)
            }
        })
    }

}

module.exports = new PersonController()

