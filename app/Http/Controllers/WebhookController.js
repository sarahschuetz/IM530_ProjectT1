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

        let speech = 'I am ' + catName

        response.json({
            speech: speech,
            source: "purr-purr-purr-app",
            displayText: speech
        })
    }

    * get_actual_room (request, response) {
        let params = request.all()
        let room = params['originalRequest']['data']['scenario']['room']

        let speech = 'I am ' + room + '.'

        response.json({
            speech: speech,
            source: "purr-purr-purr-app",
            displayText: speech
        })
    }

    * get_crime_location (request, response) {
        let params = request.all()
        let room = params['originalRequest']['data']['scenario']['room']

        let speech = 'I was ' + room + '.'

        response.json({
            speech: speech,
            source: "purr-purr-purr-app",
            displayText: speech
        })
    }

    * get_crime () {
        let params = request.all()
        let room = params['originalRequest']['data']['scenario']['crime']

        let speech = crime + 'happened.'

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

        let speech = answers[Math.floor(Math.random() * answers.length)]

        response.json({
            speech: speech,
            source: "purr-purr-purr-app",
            displayText: speech
        })
    }

}

module.exports = new WebhookController()
