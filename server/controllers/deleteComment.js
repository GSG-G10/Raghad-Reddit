const { deleteComment } = require('../database/queries');

module.exports = (req, res) => {
  const { commentId } = req.params;
  const { username } = res;
  deleteComment(commentId).then(res.redirect(`/user/${username}`));
};
