const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema

const urlSchema = new Schema({
    url: {
        type : String,
        required : true,
    },

    address: {
        type : String,
        required : true,
    }
      
})

// Export schema
module.exports = URL = mongoose.model('url', urlSchema)