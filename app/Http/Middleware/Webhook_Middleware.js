'use strict'

let WebhookController = use('App/Http/Controllers/WebhookController.js')
let query_constants = {
    'name_const': ['name', 'call you', 'are you', 'is your name'],
    'actual_room_const': ['room', 'where are you', 'actual location'],
    'age_const': ['old'],
    'crime_const': [],
    'crime_room_const': []
}

class Webhook {

    * handle (request, response, next) {
        let params = request.all()
        let query = params['result']['resolvedQuery']

        if(query.includes(query_constants.name_const[0])){
            yield WebhookController.get_name(request,response)
        }

        if(query.includes(query_constants.room_const[0])){
            yield WebhookController.get_room(request,response)
        }

        if(query.includes(query_constants.age_const[0])){
            yield WebhookController.get_age(request,response)
        }

        yield WebhookController.default_call(request,response)
    }

}

module.exports = new Webhook()
