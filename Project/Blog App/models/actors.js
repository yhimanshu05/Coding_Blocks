const mongoose = require('mongoose');

//1.schema
const { Schema } = mongoose;

const actorSchema = new Schema({
    name: String,
    imageUrl: String,
    age: Number
})

// 2. Associate schema with a model
module.exports = mongoose.model('Actor', actorSchema);