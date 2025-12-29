const express = require("express")
const {creatUser} = require("../Controller/signUp")
const router = express.Router()

router.post("/",creatUser)

module.exports = router