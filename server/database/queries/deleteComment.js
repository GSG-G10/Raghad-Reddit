const connection = require('../connection');

module.exports = (commentId) => connection.query('DELETE FROM comments WHERE id=$1;', [commentId]);
