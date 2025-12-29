// const jwt = require('jsonwebtoken')
require('dotenv').config()
const Session = require('../model/Session')

async function Authentication(req,res,next){
    const sessionId = req.cookies;

    if(!sessionId){
        return res.status(401).json({message: "Not Authenticated"})
    }

    const session = await Session.findOne({sessionId}).populate('userId')

    if(!session){
        return res.status(401).json({message: "Invalid Session"})
    }
    
    req.body = session.userId
    console.log("req.body",req.body)
    next()
    //JWT Authentication
    // const token = req.header('Authorization').split(' ')[1]
    // try{
    //     const decode = await jwt.verify(token,process.env.ACCESS_SECRET_KEY)
    //     console.log(decode)
    //     next();
    // }catch(err){
    //     res.status(401).json({error: "nahi chalega"})
    // }
}
module.exports = {Authentication}