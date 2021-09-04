const connection = require('../connection');

module.exports = (username, user) => connection.query('INSERT INTO follower(followed_id, follower_id) VALUES ((SELECT id FROM users WHERE username =$1), (SELECT id FROM users WHERE username =$2));', [username, user]);
