const { getTopPosts } = require('../database/queries');

module.exports = (req, res) => {
  getTopPosts()
    .then((data) => res.json(data.rows));
};
