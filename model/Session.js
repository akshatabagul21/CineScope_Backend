const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema({
    sessionId : {
        type: String,
        required: true,
        unique: true
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movieUser',

    }
})

const sessionModel = mongoose.model('Session',sessionSchema)

module.exports = sessionModel