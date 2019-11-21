
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('recipes').insert([
    { recipe_name: 'cereal', instructions: 'pour cereal in bowl and add milk.' },
    { recipe_name: 'toast', instructions: 'take toast out of bag and place in toaster. add butter liberally.' },
    { recipe_name: 'eggs', instructions: 'crack eggs over skillet. Mix until done. Add salt and pepper.' }
  ]);
};
