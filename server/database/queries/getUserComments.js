const connection = require('../connection');

module.exports = (username) => connection.query('SELECT comments.id, comments.comment_text, comments.comment_date, comments.vote, users.username, users.img FROM users INNER JOIN comments ON users.id = comments.user_id WHERE users.username=$1;', [username]);
