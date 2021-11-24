const express = require('express');
const ejs = require('ejs'); // mustache / jade / handlebars
const _ = require('underscore');
const axios = require('axios');

// Basic setup
const server = express();
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/', (req, res) => {
  const bros = 'Groucho Harpo Chico Zeppo'.split(' ');
  const randomBrother = _(bros).sample();
  res.render('home.ejs', {brother: randomBrother, lucky: _.random(100)}); // "Instance" variables
});

server.get('/goodbye', (req, res) => {
  res.send('goodbye cruel world');
});

// Dynamic URLs
server.get('/fanclub/:name', (req, res) => {
  res.send(`${ req.params.name } is a member of the fanclub`);
});

// Crappy calculator: /calc/5/6/+
server.get('/calc/:x/:y/:operator', (req, res) => {
  let answer;
  if (req.params.operator === '+') {
    answer = Number(req.params.x) + Number(req.params.y);
  } else if (req.params.operator === '-') {
    answer = Number(req.params.x) - Number(req.params.y);
  } // todo: handle multiplication and division
  res.render('calc.ejs', {answer: answer});
});

// Render JSON
server.get('/info.json', (req, res) => {
  res.json({
    name: 'Groucho',
    instrument: 'guitar',
    vice: 'cigars',
    luckyNumber: _.random(40)
  });
});

// Node equivalent to HTTParty to talk to APIs (axios)
server.get('/trivia', (req, res) => {
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    res.send(response.data); // todo: this could be a res.render('trivia.ejs', {trivia: response.data})
  });
});

// Form input/output
server.get('/ask', (req, res) => {
  res.render('ask.ejs');
});

server.get('/answer', (req, res) => {
  res.render('answer.ejs', {question: req.query.question, answer: 'No comment'});
})

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));