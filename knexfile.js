// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/supply_rabbit_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
