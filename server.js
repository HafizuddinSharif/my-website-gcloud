//jshint esversion:6

const express = require('express')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + "/public"))

app.use("/public", express.static('public'))

app.get('/portfolio', function(req, res) {
  res.render('portfolio')
})

app.listen(8080, function () {
  console.log('Listening on port 8080')
})
