'use strict'


class WebhookController {

    constructor () {

    }

    * default_call (request, response) {
        let speech = 'I am a fat and innocent cat! You must believe me.'

        response.json({
                speech: speech,
                source: "purr-purr-purr-app",
                displayText: speech
        })
    }

    * get_name (request, response) {
        let params = request.all()
        let catName = params['originalRequest']['data']['cat']['name']

        let speech = 'I am ' + catName + '.'

        response.json({
            speech: speech,
            source: "purr-purr-purr-app",
            displayText: speech
        })
    }

    * get_actual_room (request, response) {
        let params = request.all()
        let cat = params['originalRequest']['data']['cat']
        let room_data = params['originalRequest']['data']['scenario']['room_data']
        let room = ''

        for (var scenarioRoom of room_data) {
            for (var scenarioCat of scenarioRoom['cats']) {
                if (scenarioCat._id == cat._id) {
                    room = scenarioRoom.preposition + ' ' + scenarioRoom.name
                }
            }
        }

        let speech = 'I am ' + room + '.'

        response.json({
            speech: speech,
            source: "purr-purr-purr-app",
            displayText: speech
        })
    }

    * get_crime (request, response) {
        let params = request.all()
        let crime = params['originalRequest']['data']['scenario']['crime']['name']
        let crimeLocation = params['originalRequest']['data']['scenario']['crime_room']['name']

        let speech = 'I think someone ' + crime + ' ' + crimeLocation + '.'

        response.json({
            speech: speech,
            source: "purr-purr-purr-app",
            displayText: speech
        })
    }

    * get_crime_room (request, response) {
        let params = request.all()
        let cat = params['originalRequest']['data']['cat']
        let all_cats = params['originalRequest']['data']['scenario']['all_cats']
        let room = ''

        for (var scenarioCat of all_cats) {
            if (scenarioCat._id == cat._id) {
                room = scenarioCat.crime_room.preposition + ' ' + scenarioCat.crime_room.name
            }
        }

        let speech = 'I was ' + room + '.'

        response.json({
            speech: speech,
            source: "purr-purr-purr-app",
            displayText: speech
        })
    }

    * get_crime_activity (request, response) {
        let params = request.all()
        let cat = params['originalRequest']['data']['cat']
        let all_cats = params['originalRequest']['data']['scenario']['all_cats']
        let activity = ''

        for (var scenarioCat of all_cats) {
            if (scenarioCat._id == cat._id) {
                activity = scenarioCat.crime_activity.name
            }
        }

        let speech = 'I was' + activity + '.'

        response.json({
            speech: speech,
            source: "purr-purr-purr-app",
            displayText: speech
        })
    }

    * get_age (request, response) {
        let params = request.all()
        let age = params['originalRequest']['data']['cat']['age']
        let answers = []
        answers.append( 'I am ' + age + ' years old.')
        answers.append( age + ' long years.')

        let speech = 'I am ' + age + ' years old.'

        response.json({
            speech: speech,
            source: "purr-purr-purr-app",
            displayText: speech
        })
    }

}

module.exports = new WebhookController()
