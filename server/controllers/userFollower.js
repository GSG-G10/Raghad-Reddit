const { getUserFollower } = require('../database/queries');

module.exports = (req, res) => {
  const { username } = req.params;
  getUserFollower(username).then((data) => res.json(data.rows));
};
