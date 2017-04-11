/*
let Random = require('mongoose-simple-random')

let catSchema = Mongoose.Schema({
    name: String,
    age: Number,
    apiai: String,
    counter_guilty: Number,
    counter_accused: Number
});

catSchema.plugin(Random)

module.exports = Mongoose.model('Cat', catSchema) */

'use strict'

const LucidMongo = use('LucidMongo')

class Cat extends LucidMongo {

    static get primaryKey () {
        return '_id'
    }

}

module.exports = Cat
