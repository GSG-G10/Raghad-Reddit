const connection = require('../connection');

module.exports = (username, postId) => connection.query('DELETE FROM saved WHERE post_id=$2 AND user_id = (SELECT id FROM users WHERE username =$1);', [username, postId]);
