const express = require("express")
const router = express.Router();
const model = require("../model/signUp")
const {Authentication} = require("../middleware/auth")

router.post("/",Authentication, async function getMovieList(req, res) {
  if(!req?.body?.email){
    return res.status(400).json("Email is required")
  }
  let data =
    [{
      "movie_id": 1,
      "title": "Harry Poter and goblet of fire part 3 new relase",
      "description": "An action-packed adventure movie that will keep you on the edge of your seat.An action-packed adventure movie that will keep you on the edge of your seat",
      "releaseYear": 2025,
      "posterUrl": "http://localhost:8000/uploads/image3.jpg",
      "trailorUrl": "http://example.com/trailer1.mp4",
      "movieUrl": "http://example.com/movie1.mp4",
      "genres": [{
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
      {
        "id": 7,
        "name": 'Romance'
      },
      { "id": 8, "name": 'Fantasy' },
      { "id": 9, "name": 'Documentary' }]
    },
    {
      "movie_id": 2,
      "title": "The Great Adventure weurh erh wiuehrwue",
      "description": "An action-packed adventure movie",
      "releaseYear": 2025,
      "posterUrl": "http://localhost:8000/uploads/image2.jpg",
      "trailorUrl": "http://example.com/trailer1.mp4",
      "movieUrl": "http://example.com/movie1.mp4",
      "genres": [
        {
          "id": 1, "name": "Action"
        },
        {
          "id": 2, "name": "Comedy"
        }
      ]
    },
    {
      "movie_id": 3,
      "title": "The Great Adventure",
      "description": "An action-packed adventure movie that will keep you on the edge of your seat.An action-packed adventure movie that will keep you on the edge of your seat",
      "releaseYear": 2025,
      "posterUrl": "http://localhost:8000/uploads/image4.jpg",
      "trailorUrl": "http://example.com/trailer1.mp4",
      "movieUrl": "http://example.com/movie1.mp4",
      "genres": [
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
        }
      ]
    },
    {
      "movie_id": 4,
      "title": "The Great Adventure",
      "description": "An action-packed adventure movie that will keep you on the edge of your seat.An action-packed adventure movie that will keep you on the edge of your seat",
      "releaseYear": 2025,
      "posterUrl": "http://localhost:8000/uploads/image1.webp",
      "trailorUrl": "http://example.com/trailer1.mp4",
      "movieUrl": "http://example.com/movie1.mp4",
      "genres": [
        {
          "id": 6,
          "name": "Thriller"
        },
        {
          "id": 7,
          "name": 'Romance'
        },
        { "id": 8, "name": 'Fantasy' },
        { "id": 9, "name": 'Documentary' }
      ]
    },
    {
      "movie_id": 5,
      "title": "sdufhsuifdh whfj wrsfu wofuwu fw",
      "description": "An action-packed adventure movie that will keep you on the edge of your seat.An action-packed adventure movie that will keep you on the edge of your seat",
      "releaseYear": 2025,
      "posterUrl": "http://localhost:8000/uploads/image6.webp",
      "trailorUrl": "http://example.com/trailer1.mp4",
      "movieUrl": "http://example.com/movie1.mp4",
      "genres": [
        {
          "id": 3,
          "name": "Drama"
        },
        {
          "id": 4,
          "name": "Horror"
        },
        {
          "id": 2,
          "name": "Comedy"
        }
      ]
    },
    {
      "movie_id": 6,
      "title": "The Great Adventure",
      "description": "An action-packed adventure movie that will keep you on the edge of your seat.An action-packed adventure movie that will keep you on the edge of your seat",
      "releaseYear": 2025,
      "posterUrl": "http://localhost:8000/uploads/image2.jpg",
      "trailorUrl": "http://example.com/trailer1.mp4",
      "movieUrl": "http://example.com/movie1.mp4",
      "genres": [
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
        }
      ]
    }]

  const user = await model.findOne(
    {
      email: req?.body?.email
    }
  )

  let movieList = await data.filter(item =>
    item.genres.some(ele => user?.genres.includes(ele?.id))
  )
  if(!movieList.length){
  return res.status(200).json(data)

  }
  return res.status(200).json(movieList)
})

module.exports = router








