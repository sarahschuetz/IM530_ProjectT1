'use strict'

let Person = use('App/Model/Person')

class PersonController {

    constructor () {

    }

    * getAll (request, response) {
        let people = yield Person.all()

        response.json(people)
    }

    * get (request, response) {
        let id = request.param('id')
        let person = yield Person.findBy('_id', id)

        response.json(person)
    }

    * getRandom (request, response) {
        let people = yield Person.all()
        people = people.sort(function() {
            return .5 - Math.random()
        })

        let person = people.slice(0, 1)
        response.json(person)
    }

}

module.exports = new PersonController()

