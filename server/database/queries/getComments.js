const connection = require('../connection');

module.exports = (postId) => connection.query('SELECT comments.id, comments.comment_text, comments.comment_date, comments.vote, users.username, users.img FROM users INNER JOIN comments ON users.id = comments.user_id INNER JOIN posts ON comments.post_id = posts.id WHERE posts.id = $1 ORDER BY comments.vote DESC;', [postId]);
