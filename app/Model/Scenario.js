'use strict'

let LucidMongo = use('LucidMongo')

class Scenario extends LucidMongo {

    static get primaryKey () {
        return '_id'
    }

}

module.exports = Scenario
