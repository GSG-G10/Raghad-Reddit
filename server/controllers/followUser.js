const { followUser } = require('../database/queries');

module.exports = (req, res) => {
  const { user } = req.params;
  const { username } = res;
  followUser(username, user).then(res.redirect(`/user/${username}`));
};
