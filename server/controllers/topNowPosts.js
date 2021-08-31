const { getTopPostNow } = require('../database/queries');

module.exports = (req, res) => {
  getTopPostNow()
    .then((data) => res.json(data.rows));
};
