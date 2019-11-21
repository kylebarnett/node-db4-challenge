const express = require('express');
const helmet = require('helmet');

const db = require('./data/dbConfig.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  db('recipes')
  .then(response => {
    res.json(response)
  })
})

module.exports = server;