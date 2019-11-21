const express = require('express');
const helmet = require('helmet');

const db = require('./data/recipe-model');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  db.getRecipes()
    .then(response => {
      res.status(200).res.json(response)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error getting recipes.' })
    })
})

server.get('/:id/shopping-list', (req, res) => {
  const { id } = req.params;
  db.getShoppingList(id)
    .then(response => {
      res.json(response)
    })
})

server.get('/:id/instructions', (req, res) => {
  const { id } = req.params
  db.getInstructions(id)
    .then(response => {
      res.json(response)
    })
})

module.exports = server;