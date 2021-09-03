const connection = require('../connection');

module.exports = (username, user) => connection.query('DELETE FROM follower WHERE followed_id=(SELECT id FROM users WHERE username =$1) AND follower_id = (SELECT id FROM users WHERE username =$2);', [username, user]);
