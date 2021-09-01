const connection = require('../connection');

module.exports = (username) => connection.query('SELECT posts.id, posts.community_name, posts.post_text, posts.post_date, posts.title, posts.vote, users.username, users.img  FROM saved INNER JOIN posts ON posts.id = saved.post_id INNER JOIN users ON posts.user_id = users.id WHERE saved.user_id = (SELECT users.id from users WHERE users.username = $1);', [username]);
