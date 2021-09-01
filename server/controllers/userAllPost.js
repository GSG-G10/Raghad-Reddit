const { getUserAllPost } = require('../database/queries');

module.exports = (req, res) => {
  const { username } = req.params;
  getUserAllPost(username).then((data) => res.json(data.rows));
};
