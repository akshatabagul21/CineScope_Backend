const express = require("express")
const router = express.Router()
const model = require("../model/signUp")
const {Authentication} = require("../middleware/auth")

router.post('/' , Authentication, async function updateList(req, res){
    
    if(!req?.body?.email || !req?.body?.genres){
        return res.status(400).json("Please pass Both email and genres")
    }

    const user = await model.findOne({email : req.body.email})
 if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const previousgenres = [...user.genres]
    user.genres = req.body.genres
    await user.save();      
    return res.status(200).json(
        {
            message : "Genres Updated Successfully"
        }
    )
})

module.exports = router

