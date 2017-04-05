let Mongoose = use('Mongoose')
let Random = require('mongoose-simple-random')

let personSchema = Mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number,
    job: String,
    relationship: String
});

personSchema.plugin(Random)

module.exports = Mongoose.model('Person', personSchema)
