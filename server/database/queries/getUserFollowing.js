const connection = require('../connection');

module.exports = (username) => connection
  .query('SELECT users.username, users.img  FROM follower INNER JOIN users ON users.id = follower.follower_id WHERE follower.followed_id= (SELECT users.id from users WHERE users.username = $1)', [username]);
