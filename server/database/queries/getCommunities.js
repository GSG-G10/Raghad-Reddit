const connection = require('../connection');

module.exports = () => connection.query('SELECT community_name FROM community;');
