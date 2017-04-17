'use strict'


class WebhookController {

    constructor () {

    }

    * webhook (request, response) {
        let params = request.all()
        let origin = params.originalRequest
        //let cat = origin.data.cat
        //let cat = params.cat

        let speech = 'I am ' + origin
        /*
        if (req.body) {
            let requestBody = request.body

            if (requestBody.result) {
                speech = ''

                if (requestBody.result.fulfillment) {
                    speech += requestBody.result.fulfillment.speech
                    speech += ' '
                }

                if (requestBody.result.action) {
                    speech += 'action: ' + requestBody.result.action
                }
            }
        }

        response.json({
            speech: speech,
            displayText: speech,
            source: 'purr-purr-purr-webhook'
        })
        */

        response.json({
                speech: speech,
                source: "purr-purr-purr-app",
                displayText: speech
        })
    }

}

module.exports = new WebhookController()
