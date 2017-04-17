'use strict'


class WebhookController {

    constructor () {

    }

    * webhook (request, response) {
        let params = request.all()
        //let cat = params.cat

        let speech = 'test answer'

        let webhookAnswer = {
            "speech": speech,
            "displayText": speech,
            //"data": data,
            //"contextOut": [],
            //"source": "apiai-weather-webhook-sample"
        }

        response.json(webhookAnswer)
    }

}

module.exports = new WebhookController()
