const { upVoteComment } = require('../database/queries');

module.exports = (req, res) => {
  const { commentId } = req.params;
  upVoteComment(commentId)
    .then(() => res.send());
};
