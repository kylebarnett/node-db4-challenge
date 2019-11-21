
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredients_id: 1 },
    { recipe_id: 1, ingredients_id: 2 },
    { recipe_id: 1, ingredients_id: 3 },
    { recipe_id: 2, ingredients_id: 1 },
    { recipe_id: 2, ingredients_id: 2 },
    { recipe_id: 2, ingredients_id: 3 },
    { recipe_id: 3, ingredients_id: 1 },
    { recipe_id: 3, ingredients_id: 2 },
    { recipe_id: 3, ingredients_id: 3 }
  ]);
};
