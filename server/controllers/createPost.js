const { addPostData } = require('../database/queries');

module.exports = (req, res) => {
  const { community_name, title, description } = req.body;
  const { username } = req.params;
  addPostData(community_name, title, description, username)
    .then(() => res.redirect(`/user/${username}`));
};
