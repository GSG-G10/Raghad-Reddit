const { upVotePost } = require('../database/queries');

module.exports = (req, res) => {
  const { postId } = req.params;
  upVotePost(postId)
    .then(res.send());
};
