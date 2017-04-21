'use strict'

let Activity = use('App/Model/Activity')

class ActivityController {

    constructor () {

    }

    * getAll (request, response) {
        let activities = yield Activity.all()

        response.json(activities)
    }

    * get (request, response) {
        let id = request.param('id')
        let activity = yield Activity.findBy('_id', id)

        response.json(activity)
    }

    * getRandom (request, response) {
        let activities = yield Activity.all()
        activities = activities.sort(function() {
            return .5 - Math.random()
        })

        let activity = ''

        for (var activity_data of activities) {
            activity = activity_data
            break
        }
        response.json(activity)
    }

}

module.exports = new ActivityController()
