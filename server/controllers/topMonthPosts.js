const { getTopPostMonth } = require('../database/queries');

module.exports = (req, res) => {
  getTopPostMonth()
    .then((data) => res.json(data.rows));
};
