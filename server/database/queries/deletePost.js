const connection = require('../connection');

module.exports = (postId) => connection.query('DELETE FROM posts WHERE id=$1;', [postId]);
