const connection = require('../connection');

module.exports = () => connection.query('SELECT * FROM posts WHERE post_date >  DATE(NOW()) - (7 * interval \'1 day\') ORDER BY vote DESC;');
