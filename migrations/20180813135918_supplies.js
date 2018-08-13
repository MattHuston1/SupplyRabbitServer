
exports.up = function(knex, Promise) {
  return knex.schema.createTable('supplies', supplies => {
    supplies.increments()
    supplies.integer('teacher_id')
    supplies.text('supply_name')
    supplies.integer('quantity_needed')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('supplies')
};
