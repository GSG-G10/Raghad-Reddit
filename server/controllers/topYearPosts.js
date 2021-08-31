const { getTopPostYear } = require('../database/queries');

module.exports = (req, res) => {
  getTopPostYear()
    .then((data) => res.json(data.rows));
};
