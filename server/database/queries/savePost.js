const connection = require('../connection');

module.exports = (username, postId) => connection.query('INSERT INTO saved (post_id, user_id) VALUES ($1, (SELECT id FROM users WHERE username = $2)) ', [postId, username]);
