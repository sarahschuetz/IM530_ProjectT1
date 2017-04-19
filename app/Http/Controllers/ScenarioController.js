'use strict'

let Scenario = use('App/Model/Scenario')
let Cat = use('App/Model/Cat')
let Room = use('App/Model/Room')
let Crime = use('App/Model/Crime')
let Person = use('App/Model/Person')


class ScenarioController {

    constructor () {

    }

    * getAll (request, response) {
        let scenarios = yield Scenario.all()

        response.json(scenarios)
    }

    * get (request, response) {
        let id = request.param('id')
        let scenario = yield Scenario.findBy('_id', id)

        response.json(scenario)
    }

    * createScenario (request, response) {
        let params = request.all()

        let test_room = 'kitchen'
        let test_person = 'Sarah'
        let test_crime = 'Ate the cake.'
        let test_guiltycat = 'Whiskers'

        var scenario = new Scenario()
        scenario.guilty_cat = test_guiltycat
        scenario.crime = test_crime
        scenario.room = test_room
        scenario.person = test_person
        scenario.all_cats = [{cat: 'Whiskers'},{cat: 'Pumpkin'},{cat: 'Oreo'},{cat: 'Waffles'}]

        yield scenario.save()
        response.status(201).send('Created')
    }

}

module.exports = new ScenarioController()
