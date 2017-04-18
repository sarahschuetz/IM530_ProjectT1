'use strict'

let WebhookController = use('App/Http/Controllers/WebhookController.js')
let constants = {
    'name_const': ['name'],
    'room_const': ['room']
}

class Webhook {

    * handle (request, response, next) {
        let params = request.all()
        let query = params['result']['resolvedQuery']
        request.middleware = 'middleware call' + query

        if(query.includes(constants.name_const[0])){
            console.log('should call get_name')
            yield WebhookController.get_name(request,response)
        }

        yield WebhookController.webhook(request,response)
    }

}

module.exports = new Webhook()
