const connection = require('../connection');

module.exports = (username, email, password) => connection.query('INSERT INTO users(name, email, password) VALUES($1, $2, $3)', [username, password, email]);
