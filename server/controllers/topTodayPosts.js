const { getTopPostToday } = require('../database/queries');

module.exports = (req, res) => {
  getTopPostToday()
    .then((data) => res.json(data.rows));
};
