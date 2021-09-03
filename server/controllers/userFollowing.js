const { getUserFollowing } = require('../database/queries');

module.exports = (req, res) => {
  const { username } = req.params;
  getUserFollowing(username).then((data) => res.json(data.rows));
};
