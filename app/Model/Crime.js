let Mongoose = use('Mongoose')
let Random = require('mongoose-simple-random')

let crimeSchema = Mongoose.Schema({
    name: String,
    type: String
});

crimeSchema.plugin(Random)

module.exports = Mongoose.model('Crime', crimeSchema)
