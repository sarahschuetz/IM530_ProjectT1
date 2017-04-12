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

    }

}

module.exports = new PersonController()

