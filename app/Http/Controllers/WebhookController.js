'use strict'


class WebhookController {

    constructor () {

    }

    * webhook (request, response) {
        let params = request.all()
        let origin = params['originalRequest']
        //let cat = origin.data.cat
        let paramArray = JSON.stringify(params)

        let speech = 'I am ' + origin + paramArray

        response.json({
                speech: speech,
                source: "purr-purr-purr-app",
                displayText: speech
        })
    }

}

module.exports = new WebhookController()
