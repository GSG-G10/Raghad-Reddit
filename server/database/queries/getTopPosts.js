const connection = require('../connection');

module.exports = () => connection.query('SELECT * FROM posts ORDER BY vote DESC;');
