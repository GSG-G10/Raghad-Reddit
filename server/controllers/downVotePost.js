const { downVotePost } = require('../database/queries');

module.exports = (req, res) => {
  const { postId } = req.params;
  downVotePost(postId)
    .then(() => res.send());
};
