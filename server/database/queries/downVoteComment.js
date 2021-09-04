const connection = require('../connection');

module.exports = (id) => connection.query('UPDATE comments SET vote = vote - 1 WHERE id = $1', [id]);
