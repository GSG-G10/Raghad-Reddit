const connection = require('../connection');

module.exports = (username) => connection.query('SELECT posts.id, posts.community_name, posts.post_text, posts.post_date, posts.title, posts.vote, users.username, users.img FROM posts INNER JOIN users ON users.id = posts.user_id WHERE users.username = $1;', [username]);
