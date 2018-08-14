
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teachers', teachers => {
    teachers.increments()
    teachers.text('name')
    teachers.text('school')
    teachers.text('address')
    teachers.text('email')
    teachers.text('profile_picture')
    teachers.boolean('logged_in')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('teachers')

};
