'use strict'

let Mongoose = use('Mongoose')
let Cat = use('App/Model/Cat')

class CatController {

    constructor () {

    }

    * getAll (request, response) {

        // TODO: load from db
        var cats = [{
            name: 'Casimir',
            age: 9
        }, {
            name: 'Whiskers',
            age: 2
        }, {
            name: 'Oreo',
            age: 1
        }];

        response.json(cats);
    }

    * get (request, response) {
        // TODO: load from db
        const id = request.param('id')
        response.json({'cat' : id})
    }

    * getRandom (request, response) {
        // TODO: load random cat from db
        const count = request.param('count')
        response.json({'count' : count})
    }

}

module.exports = new CatController()
