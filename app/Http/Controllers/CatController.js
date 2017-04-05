'use strict'

let Cat = use('App/Model/Cat')

class CatController {

    constructor () {
    }

    * getAll (request, response) {

        let cats = yield Cat.find(function (err) {
            if (err) return console.error(err);
        });

        response.json(cats);
    }

    * get (request, response) {

        let id = request.param('id')
        let cat = yield Cat.findById({ _id: id }, function(err) {
            if (err) return console.error(err);
        });

        response.json(cat)
    }

    * getRandom (request, response) {
        // TODO: load random cats from db
        let count = request.param('count')

        let cats = yield Cat.find(function (err) {
            if (err) return console.error(err);
        });

        response.json()
    }

}

module.exports = new CatController()
