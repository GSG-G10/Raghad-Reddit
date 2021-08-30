const connection = require('../connection');

module.exports = () => connection.query('SELECT * FROM posts WHERE post_date >  DATE(NOW()) - (1 * interval \'1 month\') ORDER BY vote DESC;');
