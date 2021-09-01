const connection = require('../connection');

module.exports = (username) => connection.query('SELECT username, user_date, img FROM users WHERE username = $1;', [username]);
