const { unSavePost } = require('../database/queries');

module.exports = (req, res) => {
  const { postId } = req.params;
  const { username } = res;
  unSavePost(username, postId).then(res.redirect(`/user/${username}`));
};
