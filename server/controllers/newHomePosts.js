const { getNewPosts } = require('../database/queries');

module.exports = (req, res) => {
  getNewPosts()
    .then((data) => res.json(data.rows));
};
