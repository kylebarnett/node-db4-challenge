const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes')
}

function getShoppingList(id) {
  return db('recipes as r')
    .join('ingredients as i', 'r.id', 'i.id')
    .join('recipe_ingredients', 'r.id', 'recipe_ingredients.recipe_id')
    .select('r.id', 'recipe_name', 'i.ingredient_name', 'instructions', 'i.quantity')
    .where({ recipe_id: id })
    .first()
}

function getInstructions(id) {
  return db('recipes').where({ id })
}