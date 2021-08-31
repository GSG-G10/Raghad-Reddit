const { getComments } = require('../database/queries');

module.exports = (req, res) => {
  const { postId } = req.params;
  getComments(postId)
    .then((data) => res.json(data.rows));
};
