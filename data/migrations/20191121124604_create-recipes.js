
exports.up = function (knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('recipe_name', 128).notNullable();
    tbl.string('instructions').notNullable()
  })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128).notNullable().unique();
      tbl.string('quantity', 128).notNullable().unique();
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function (knex) {
  return knex.schema
  dropTableIfExists('recipe_ingredients')
  dropTableIfExists('ingredients')
  dropTableIfExists('recipes')
};
