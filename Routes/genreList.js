const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).json(
        [{
            "id": 1,
            "name": "Action"
        },
        {
            "id": 2,
            "name": "Comedy"
        },
        {
            "id": 3,
            "name": "Drama"
        },
        {
            "id": 4,
            "name": "Horror"
        },
        {
            "id": 5,
            "name": "Sci-Fi"
        },
        {
            "id": 6,
            "name": "Thriller"
        },
        { "id": 7, "name": 'Romance' },
        { "id": 8, "name": 'Fantasy' },
        { "id": 9, "name": 'Documentary' }]
    )
})
module.exports = router