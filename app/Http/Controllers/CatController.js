'use strict'

let Apiai = require('apiai')
let Cat = use('App/Model/Cat')
let Scenario = use('App/Model/Scenario')


class CatController {

    constructor () {

    }

    * getAll (request, response) {
        let cats = yield Cat.all()

        response.json(cats)
    }

    * get (request, response) {
        let id = request.param('id')
        let cat = yield Cat.findBy('_id', id)

        response.json(cat)
    }

    * getRandom (request, response) {
        let count = request.param('count')
        let cats = yield Cat.all()

        cats = cats.sort(function() {
            return .5 - Math.random()
        })

        if(count < Cat.count()) {
            cats = cats.slice(0, count)
        }

        response.send(cats)
    }

    * talk (request, response) {

        let params = request.all()
        let message = params.message
        let apiaiKey = params.apiaiKey
        let cat = params.cat
        let scenario_id = params.scenarioId
        let currentScenario = yield Scenario.findBy('_id', scenario_id)

        // talk with specific cat
        let req = Apiai(apiaiKey).textRequest(message, {
            sessionId : scenario_id,
            originalRequest : {
                source : 'purr-purr-purr',
                data : {
                    cat : cat,
                    scenario : currentScenario
                }
            }
        })

        req.on('response', function(res) {
            response.json(res.result.fulfillment.speech)
        })

        req.on('error', function(error){
            return
        })

        req.end()
    }

}

module.exports = new CatController()
