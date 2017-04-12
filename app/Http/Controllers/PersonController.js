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
        let name = request.param('name')
        let person = yield Person.findBy({'name' : name})

        response.json(person)
    }

    * getRandom (request, response) {
        let count = request.param('count')
        let people = yield Person.all()

        people = people.sort(function() {
            return .5 - Math.random();
        })

        if(count < Person.count()) {
            people = people.slice(0, count)
        }

        response.json(people)
    }

}

module.exports = new PersonController()

