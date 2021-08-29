const connection = require('../connection');

module.exports = (username) => connection.query('SELECT password FROM users WHERE username=$1', [username]);
