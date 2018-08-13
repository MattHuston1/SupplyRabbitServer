
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teachers', teachers => {
    teachers.increments()
    teachers.text('name')
    teachers.text('school')
    teachers.text('address')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('teachers')

};
