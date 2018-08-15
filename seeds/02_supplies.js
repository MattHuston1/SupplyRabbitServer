
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('supplies').del()
    .then(function () {
      // Inserts seed entries
      return knex('supplies').insert([
        {id: 1, teacher_id: 1, supply_name: 'Pencils', quantity_needed: 30},
        {id: 2, teacher_id: 2, supply_name: 'Notebooks', quantity_needed: 15},
        {id: 3, teacher_id: 3, supply_name: 'Markers', quantity_needed: 10}
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE supplies RESTART WITH 4;');
    });
};
