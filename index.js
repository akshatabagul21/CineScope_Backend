const express = require('express');
const { connectWithDb } = require("./connect")
const signInRoute = require("./Routes/signIn")
const genreListRoute = require("./Routes/genreList")
const signUpRoute = require("./Routes/signUp")
const getRefreshToken = require("./Routes/refreshToken")
const getMovieList = require("./Routes/movieList")
const updateList = require("./Routes/updateList")
const cookieParser = require('cookie-parser')
const cors = require('cors');

const app = express();


connectWithDb("mongodb://127.0.0.1:27017/movierecommander").then(() => console.log("MongoDb Connected"))
app.use(express.json())
app.use(cookieParser())
app.use(cors());
app.use('/uploads',express.static('uploads'));


app.use("/signIn",signInRoute)
app.use("/genreList",genreListRoute)
app.use("/signUp",signUpRoute)
// app.use("/refreshToken",getRefreshToken)
app.use("/movieList", getMovieList)
app.use("/updateList", updateList)
app.listen(8000, () => { console.log("Server Started") })