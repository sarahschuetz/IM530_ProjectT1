let Mongoose = use('Mongoose')

let roomSchema = Mongoose.Schema({
    name: String
});

module.exports = Mongoose.model('Room', roomSchema)
