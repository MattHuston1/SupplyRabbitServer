const database = require('./database-connection')

module.exports = {
    listSupplies() {
        return database('supplies').select('*')
    },

    readSupplies(id) {
      return database('supplies').select('*').where('id', id).first()
    },
    
    createSupplies(supply) {
      return database('supplies').insert(supply).returning('*')
      .then(record => record[0])
    },
    
    updateSupplies(id, supply) {
      return database('supplies').update(supply).where('id', id).returning('*')
      .then(record => record[0])
    },
    
    deleteSupplies(id) {
      return database('supplies').delete().where('id', id)
    },

    listTeachers() {
      return database('teachers').select('*')
    },

    readTeachers(id) {
      return database('teachers').select('*').where('id', id).first()
    },
    
    createTeachers(teacher) {
      return database('teachers').insert(teacher).returning('*')
      .then(record => record[0])
    },

    updateTeachers(id, teacher) {
      return database('teachers').update(teacher).where('id', id).returning('*')
      .then(record => record[0])
    },
    
    deleteTeachers(id) {
      return database('teachers').delete().where('id', id)
    },
  }