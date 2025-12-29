const model = require("../model/signUp")
const bcrypt = require("bcrypt")
const validator = require('validator')

async function creatUser(req, res) {
    const body = req?.body
    if ((!body?.name || !body?.email || !body?.password || !body?.genres.length)) {
        return res.status(400).json("Please enter all the values")
    }
    const hashedPassword = await bcrypt.hash(body.password,10)
    await model.create(
        {
            name: body.name,
            email: body.email,
            password: hashedPassword,
            genres: body.genres
        }
    )
    return res.status(200).json("Account Created Successfully.")
}

module.exports = {creatUser}