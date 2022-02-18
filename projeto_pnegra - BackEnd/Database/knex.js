const auth = require('./dbAuth')
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : auth.host,
      port : auth.port,
      user : auth.user,
      password : auth.password,
      database : 'perolanegra'
    }
  });

module.exports = knex;