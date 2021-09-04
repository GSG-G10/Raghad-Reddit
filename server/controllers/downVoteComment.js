const { downVoteComment } = require('../database/queries');

module.exports = (req, res) => {
  const { commentId } = req.params;
  downVoteComment(commentId)
    .then(() => res.send());
};
