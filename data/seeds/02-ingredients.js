
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('ingredients').insert([
    { ingredient_name: 'fruit loops', quantity: '2 cups' },
    { ingredient_name: 'wonder bread', quantity: '2 slices' },
    { ingredient_name: 'cage-free egg', quantity: '2 eggs' }
  ]);
};
