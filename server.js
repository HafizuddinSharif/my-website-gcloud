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
  res.render('portfolio')
})

app.get('/linktree', function(req, res) {

  title = [
    'Portfolio',
    'Youtube',
    'Curiouscat',
    'Github',
    'Linkedin',
    'Twitter'
  ]

  link = [
    '/',
    'https://www.youtube.com/channel/UCAbwe9Gd8TD5lO_RvhT6ZgQ',
    'https://curiouscat.qa/sharifffkun',
    'https://github.com/HafizuddinSharif',
    'https://www.linkedin.com/in/hafizuddin-sharif-umar-sharif-606567160/',
    'https://twitter.com/sharifffkun'
  ]

  obj = {
    title: title,
    link: link
  }

  res.render('main-page', obj)
})

// fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hafizuddinsharif')
//     .then((res) => res.json())
//     .then((data) => {
//       posts = data.items
//     }
//   )

app.listen(8080, function () {
  console.log('Listening on port 8080')
})
