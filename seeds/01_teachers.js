
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        {id: 1, name: 'James Schultz', school: 'Galvanize', address:'1644 Platte Street Denver CO 80202'},
        {id: 2, name: 'Patrick Biffle', school: 'Galvanize', address:'1644 Platte Street Denver CO 80202'},
        {id: 3, name: 'Nmuta Jones', school: 'Galvanize', address:'1644 Platte Street Denver CO 80202'}
      ]);
    })
    .then(() => {
    return knex.raw('ALTER SEQUENCE teachers RESTART WITH 4;');
  })
};

