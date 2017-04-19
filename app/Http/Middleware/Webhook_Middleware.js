'use strict'

let WebhookController = use('App/Http/Controllers/WebhookController.js')
let query_constants = {
    'name_const': ['name', 'call you', 'who are you', 'is your name'],
    'actual_room_const': ['room', 'where are you', 'actual location', 'location'],
    'age_const': ['old', 'age'],
    'crime_const': ['happened'],
    'crime_room_const': ['room', 'location', 'where were you', 'where have you been']
}

class Webhook {

    * handle (request, response, next) {
        let params = request.all()
        let query = params['result']['resolvedQuery']

        for (var name_const of query_constants.name_const) {
            if(query.includes(name_const)){
                yield WebhookController.get_name(request,response)
            }
        }

        for (var actual_room_const of query_constants.actual_room_const) {
            if(query.includes(actual_room_const)){
                yield WebhookController.get_actual_room(request,response)
            }
        }

        for (var crime_room_const of query_constants.crime_room_const) {
            if(query.includes(crime_room_const)){
                yield WebhookController.get_crime_room(request,response)
            }
        }

        for (var age_const of query_constants.age_const) {
            if(query.includes(age_const)){
                yield WebhookController.get_age(request,response)
            }
        }

        for (var crime_const of query_constants.crime_const) {
            if(query.includes(crime_const)){
                yield WebhookController.get_crime(request,response)
            }
        }

        yield next
    }

    * check_query_constants (query) {



    }

}

module.exports = new Webhook()
