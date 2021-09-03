const { deletePost } = require('../database/queries');

module.exports = (req, res) => {
  const { postId } = req.params;
  const { username } = res;
  deletePost(postId).then(res.redirect(`/user/${username}`));
};
