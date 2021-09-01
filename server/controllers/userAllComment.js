const { getUserAllComment } = require('../database/queries');

module.exports = (req, res) => {
  const { username } = req.params;
  getUserAllComment(username)
    .then((data) => res.json(data.rows));
};
