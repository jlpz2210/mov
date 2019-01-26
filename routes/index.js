const express = require('express');
const router  = express.Router();

const Movie = require("../models/Movie")
const body = require("../bin/seeds")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/new",(req, res) => {
  body.forEach(element => {
    let m = new Movie(element)
    m.save()
  });
  res.render("done")
})

router.get("/movies", (req,res)=>{
  Movie.find().then(movies=>{
    res.render("list", {movies})
  })
})

router.get("/movies/:title",(req,res)=>{
  Movie.find().then(movies=>{
    res.render("detail",req.movies)
  })
})

module.exports = router;
