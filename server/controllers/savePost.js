const { savePost } = require('../database/queries');

module.exports = (req, res) => {
  const { postId } = req.params;
  const { username } = res;
  savePost(username, postId).then(res.redirect('/'));
};
