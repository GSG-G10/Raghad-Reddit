const { getCommunities } = require('../database/queries');

module.exports = (req, res) => {
  getCommunities()
    .then((data) => res.json(data.rows));
};
