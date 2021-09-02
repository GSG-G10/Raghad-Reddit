const connection = require('../connection');

module.exports = (username, url) => connection.query('UPDATE users SET img = $1 WHERE username = $2', [url, username]);
