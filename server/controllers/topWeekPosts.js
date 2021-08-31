const { getTopPostWeek } = require('../database/queries');

module.exports = (req, res) => {
  getTopPostWeek()
    .then((data) => res.json(data.rows));
};
