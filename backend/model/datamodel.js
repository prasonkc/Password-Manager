const mongoose = require('mongoose')

// Createa schema object
const Schema = mongoose.Schema

// Define our schema
const dataSchema = new Schema({
    URL: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// Create a new model from our schema
const data = mongoose.model("UserData", dataSchema)

// Export our model
module.exports = data