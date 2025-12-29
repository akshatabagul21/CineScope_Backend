const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    genres : {
        type : [Number],
        required : true,
    }
},{timestamps:true })

const userModel = mongoose.model("movieUser" , userSchema)
module.exports = userModel 