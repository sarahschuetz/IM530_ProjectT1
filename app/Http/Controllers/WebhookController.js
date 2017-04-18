'use strict'


class WebhookController {

    constructor () {

    }

    * webhook (request, response) {
        let params = request.all()
        let query = params['result']['resolvedQuery']
        let catName = params['originalRequest']['data']['cat']['name']
        let middleware = request.middleware

        let speech = 'I am ' + catName + query + middleware

        response.json({
                speech: speech,
                source: "purr-purr-purr-app",
                displayText: speech
        })
    }

}

module.exports = new WebhookController()