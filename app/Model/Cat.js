'use strict'

let LucidMongo = use('LucidMongo')

class Cat extends LucidMongo {

    static get primaryKey () {
        return '_id'
    }

    setActualRoom(actual_room) {
        return actual_room;
    }

    setCrimeRoom(crime_room) {
        return crime_room;
    }

}

module.exports = Cat
