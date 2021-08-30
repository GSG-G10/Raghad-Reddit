const connection = require('../connection');

module.exports = () => connection.query('SELECT * FROM  posts WHERE post_date = DATE(NOW()) ORDER BY vote DESC;');
