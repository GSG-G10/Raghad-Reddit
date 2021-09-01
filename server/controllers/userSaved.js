const { getUserSaved } = require('../database/queries');

module.exports = (req, res) => {
  const { username } = req.params;
  getUserSaved(username).then((data) => res.json(data.rows));
};
