const connection = require('../connection');

module.exports = (id) => connection.query('INSERT INTO saved (post_id, user_id) SELECT id, user_id FROM posts WHERE posts.id = $1', [id]);
