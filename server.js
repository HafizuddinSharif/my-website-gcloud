//jshint esversion:6

const express = require('express')
const ejs = require('ejs')
const https = require('https')

const app = express()

https.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40hafizuddinsharif&api_key=zki0rrjszmvlouwkhvh8w00yliooqjh3lxwxklzf',
  res => {

    let body = ''

    res.on('data', data => {
      body += data
    })

    res.on('end', () => {
      posts = JSON.parse(body).items
    })
  })

var posts = []

app.set('view engine', 'ejs')

app.use(express.static(__dirname + "/public"))

app.use("/public", express.static('public'))

app.get('/', function(req, res) {
  res.render('main-page')
})

app.get('/portfolio', function(req, res) {
  res.render('portfolio')
})

app.get('/blog', function(req, res) {

  let obj = {
    posts: posts
  }

  res.render('blog', obj)
})

app.listen(8080, function () {
  console.log('Listening on port 8080')
})
