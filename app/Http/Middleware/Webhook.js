'use strict'

let WebhookController = use('App/Http/Controllers/WebhookController.js')

class Webhook {

    * handle (request, response, next) {
        let params = request.all()
        let query = params['result']['resolvedQuery']
        request.middleware = 'middleware call' + query
        yield WebhookController.webhook(request,response)
    }

}

module.exports = new Webhook()
