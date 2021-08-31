const { savePost } = require('../database/queries');

module.exports = (req, res) => {
  const { postId } = req.params;
  savePost(postId).then(res.redirect('/'));
};
