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

        console.log(JSON.stringify(params))

        let person = params['owner']
        let all_cats = params['allCats']
        let room_data = params['rooms']

        let test_crime = 'Peed on the floor.'
        let test_guiltycat = 'Whiskers'
        let test_room = 'living room'

        var scenario = new Scenario()
        scenario.guilty_cat = test_guiltycat
        scenario.crime = test_crime
        scenario.crime_room = test_room

        scenario.person = person
        scenario.all_cats = all_cats
        scenario.room_data = room_data

        yield scenario.save()
        response.status(201).json(scenario._id)
    }

    /*
    * setActualRoomForCat (request, response) {
        let params = request.all()
        let room = params['room']
        let cat = params['cat']

        let room_name = request.param('room')
        let room = yield Room.findBy({'name': room_name})

        let id = cat._id //request.param('id')
        let cat = yield Cat.findBy('_id', id)

        cat.actual_room = room

        //yield cat.save()
        response.status(200).send('Updated.')
    }

    * setCrimeRoomForCat (request, response) {
        let params = request.all()
        let room = params['room']
        let cat = params['cat']

        let room_name = request.param('room')
        let room = yield Room.findBy({'name': room_name})

        let id = cat._id
        let cat = yield Cat.findBy('_id', id)

        cat.crime_room = room

        //yield cat.save()
        response.status(200).send('Updated.')
    }

    * setCrimeActivityForCat (request, response) {
        let params = request.all()
        let activity = params['activity']//request.param('activity')
        let cat = params['cat']

        let id = cat._id
        let cat = yield Cat.findBy('_id', id)

        cat.crime_activity = activity

        //yield cat.save()
        response.status(200).send('Updated.')
    } */

}

module.exports = new ScenarioController()
