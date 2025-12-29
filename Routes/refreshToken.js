const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const userModel = require("../model/signUp")
require('dotenv').config();

router.get('/',async function(req,res) {
    try{
        const token = req?.body?.refreshToken;
        const decode = await jwt.verify(token , process.env.REFRESH_SECRET_KEY)
        const user = await userModel.findById(decode.id)
        if(user){
             const payload = {
            id: user._id, 
            email: user.email,
        };
        const newAcessToken = await jwt.sign(payload,process.env.ACCESS_SECRET_KEY,{expiresIn: '1500m'})
        return res.status(200).json({newAcessToken : newAcessToken})
        }
    }catch(err){
        return res.status(500).json("Invalid refresh token")
    }


})

module.exports = router