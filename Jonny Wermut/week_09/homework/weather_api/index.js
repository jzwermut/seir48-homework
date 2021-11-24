const express = require('express');
const ejs = require('ejs');
const axios = require ('axios')
const weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'San Francisco, CA', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);

  console.log(JSON.stringify(result[0].current.temperature, null, 2));
});

// result[0].location.name
// result[0].current.temperature

const server = express();
server.set('view-engine', ejs);
const PORT = 1337; // could be any number higher than 1024



server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/answer', (req, res) => {
    console.log(req)
    weather.find({search: req.query.city, degreeType: 'C'}, function(err, result) {
    // console.log(JSON.stringify(result, null, 2));
    res.render('answer.ejs', {location: result[0].location.name, temp: result[0].current.temperature, sky: result[0].current.skytext})
  }); 
});

server.listen(PORT, () => console.log(`Server running: http://localhost:${ PORT }`));