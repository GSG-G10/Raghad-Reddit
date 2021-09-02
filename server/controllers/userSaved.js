const { getUserSaved } = require('../database/queries');

module.exports = (req, res) => {
  const { username } = res;
  getUserSaved(username).then((data) => res.json(data.rows));
};
