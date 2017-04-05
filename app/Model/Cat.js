let Mongoose = use('Mongoose')
let Random = require('mongoose-simple-random')

let catSchema = Mongoose.Schema({
    name: String,
    age: Number
});

catSchema.plugin(Random)

module.exports = Mongoose.model('Cat', catSchema)
