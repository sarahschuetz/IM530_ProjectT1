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
        let person = params['owner']
        let all_cats = params['allCats']
        let room_data = params['rooms']
        let crime = params['crime']
        let guilty_cat = params['guiltyCat']

        let crime_room = params['crime']['room']

        var scenario = new Scenario()
        scenario.guilty_cat = guilty_cat
        scenario.crime = crime
        scenario.crime_room = crime_room

        scenario.person = person
        scenario.all_cats = all_cats
        scenario.room_data = room_data

        yield scenario.save()
        response.status(201).json(scenario._id)
    }

    * updateRooms (request, response) {
        let params = request.all()
        let id = request.param('id')
        let rooms = params['rooms']

        let scenario = yield Scenario.findBy('_id', id)
        scenario.room_data = rooms
        yield scenario.save()
        response.status(200).send('Updated.')
    }

    * guessGuiltyCat (request, response) {
        let params = request.all()
        let id = request.param('id')
        let cat = params['cat']

        let globalAccusedCat = yield Cat.findBy('_id', cat._id)
        globalAccusedCat.counter_accused = globalAccusedCat.counter_accused + 1
        yield globalAccusedCat.save()

        let scenario = yield Scenario.findBy('_id', id)

        let globalGuiltyCat = yield Cat.findBy('_id', scenario.guilty_cat._id)
        globalGuiltyCat.counter_guilty = globalGuiltyCat.counter_guilty + 1
        yield globalGuiltyCat.save()

        if(cat._id == scenario.guilty_cat._id){
            response.send(true)
        } else {
            response.send(false)
        }
    }

    * deleteScenario (request, response) {
        let id = request.param('id')
        let scenario = yield Scenario.findBy('_id', id)

        yield scenario.delete()

        response.status(200).send('Deleted.')
    }

}

module.exports = new ScenarioController()
