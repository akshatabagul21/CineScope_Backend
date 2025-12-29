const mongoose = require("mongoose")

async function connectWithDb(url){
    return mongoose.connect(url);
}

module.exports = {connectWithDb}