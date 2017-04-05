let Mongoose = use('Mongoose')

let catSchema = Mongoose.Schema({
    name: String,
    age: Number
});

module.exports = Mongoose.model('Cat', catSchema)
