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

module.exports = router;
