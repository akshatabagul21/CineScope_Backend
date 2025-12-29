const express = require("express")
const {signIn} = require("../Controller/signIn")
const router = express.Router();

router.post("/", signIn)

module.exports = router