const connection = require('../connection');

module.exports = (communityName, title, discription, username) => connection.query('INSERT INTO posts (community_name, title, post_text, user_id) VALUES ($1, $2, $3, (SELECT users.id FROM users WHERE users.username = $4));', [communityName, title, discription, username]);
