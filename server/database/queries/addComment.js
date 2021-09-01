const connection = require('../connection');

module.exports = (reply, postId, username) => connection.query('INSERT INTO comments (comment_text, post_id, user_id) VALUES ($1, $2, (SELECT id FROM users WHERE username=$3));', [reply, postId, username]);
