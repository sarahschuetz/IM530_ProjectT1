'use strict'

let WebhookController = use('App/Http/Controllers/WebhookController.js')
let query_constants = {
    'name_const': ['name', 'call you', 'are you', 'is your name'],
    'actual_room_const': ['room', 'where are you', 'actual location', 'location'],
    'age_const': ['old', 'age'],
    'crime_const': ['happened'],
    'crime_room_const': ['room', 'location', 'where were you', 'where have you been']
}

class Webhook {

    * handle (request, response, next) {
        let params = request.all()
        let query = params['result']['resolvedQuery']

        for (var i = 0; i < query_constants.name_const.length; i++) {
            if(query.includes(query_constants.name_const[i])){
                yield WebhookController.get_name(request,response)
            }
        }

        if(query.includes(query_constants.actual_room_const[0])){
            yield WebhookController.get_actual_room(request,response)
        }

        if(query.includes(query_constants.crime_room_const[0])){
            yield WebhookController.get_crime_room(request,response)
        }

        if(query.includes(query_constants.age_const[0])){
            yield WebhookController.get_age(request,response)
        }

        yield next
    }

    * check_query_constants (query) {



    }

}

module.exports = new Webhook()
