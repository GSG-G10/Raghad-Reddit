const { addComment } = require('../database/queries');

module.exports = (req, res) => {
  const { username } = res;
  const { reply } = req.body;
  const { postId } = req.params;
  addComment(reply, postId, username)
    .then(() => res.redirect('/'));
};
