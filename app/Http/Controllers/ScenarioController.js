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

        let test_room = 'living room'

        var scenario = new Scenario()
        scenario.guilty_cat = guilty_cat
        scenario.crime = crime
        scenario.crime_room = test_room

        scenario.person = person
        scenario.all_cats = all_cats
        scenario.room_data = room_data

        yield scenario.save()
        response.status(201).json(scenario._id)
    }


    * setActualRoomForCat (request, response) {
        let params = request.all()
        let id = request.param('id')
        let cat = params['cat']
        let actualRoom = params['room']

        let scenario = yield Scenario.findBy('_id', id)
        let count = 0

        for (var scenarioCat of scenario.all_cats) {
            if(scenarioCat._id == cat._id){
               break
            }
            count++
        }

        scenario.all_cats[count].actual_room = actualRoom

        yield scenario.save()
        response.status(200).send('Updated.')
    }

    * setCrimeRoomForCat (request, response) {
        let params = request.all()
        let id = request.param('id')
        let cat = params['cat']
        let crimeRoom = params['room']

        let scenario = yield Scenario.findBy('_id', id)
        let count = 0

        for (var scenarioCat of scenario.all_cats) {
            if(scenarioCat._id == cat._id){
                break
            }
            count++
        }

        scenario.all_cats[count].crime_room = crimeRoom

        yield scenario.save()
        response.status(200).send('Updated.')
    }

    * setCrimeActivityForCat (request, response) {
        let params = request.all()
        let id = request.param('id')
        let cat = params['cat']
        let crimeActivity = params['crime_activity']

        let scenario = yield Scenario.findBy('_id', id)
        let count = 0

        for (var scenarioCat of scenario.all_cats) {
            if(scenarioCat._id == cat._id){
                break
            }
            count++
        }

        scenario.all_cats[count].crime_activity = crimeActivity

        yield scenario.save()
        response.status(200).send('Updated.')
    }

    * deleteScenario (request, response) {
        let id = request.param('id')
        let scenario = yield Scenario.findBy('_id', id)

        yield scenario.delete()

        response.status(200).send('Deleted.')
    }

}

module.exports = new ScenarioController()
