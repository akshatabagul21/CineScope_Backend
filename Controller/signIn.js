const modelData = require("../model/signUp")
const Session = require("../model/Session")
// const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
// require('dotenv').config();
// const { v4: uuidv4 } = require('uuid');
const { v4: uuidv4 } = require('uuid');


async function signIn(req, res) {
    const body = req.body;
    if (!body?.email) {
        return res.status(400).send("Please enter the Email id")
    }
    if (!body?.password) {
        return res.status(400).send("Please enter the Password")
    }
    try {
        const user = await modelData.findOne(
            {
                email: body.email
            }
        )
        
        if (!user) { 
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        const passwordMatch = await bcrypt.compare(body.password, user.password)
        console.log("passwordMatch",passwordMatch)
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        
        const sessionId = uuidv4();
        console.log("Generated sessionId:", sessionId);

        try {
            const session = await Session.create({
                sessionId,
                userId: user._id
            });
        } catch (err) {
            console.error("SESSION CREATE FAILED ❌", err.message);
            throw err;
        }

         console.log("sessionId",sessionId)
        res.cookie('sessionId',sessionId , {
            httpOnly: true,
        })

        res.json({message : 'Login successful'})



        //JWT authentication
        //  const payload = {
        //     id: user._id, 
        //     email: user.email,
        // };
        // const accessToken = await jwt.sign(payload, process.env.ACCESS_SECRET_KEY, { expiresIn: '15min' })
        // const refreshToken = await jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {expiresIn: '15m'})

        // res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken, selectedGeners : user.genres});

    } catch (error) {
        return res.status(500).json({ error})
    }

}

module.exports = { signIn }