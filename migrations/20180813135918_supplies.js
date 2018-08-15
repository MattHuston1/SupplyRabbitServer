
exports.up = function(knex, Promise) {
  return knex.schema.createTable('supplies', supplies => {
    supplies.increments()
    supplies.text('supply_name')
    supplies.integer('quantity_needed')
    supplies.integer('teacher_id')
      .notNullable()
      .references('id')
      .inTable('teachers')
      .onDelete('CASCADE') 
      .index()
    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('supplies')
};
