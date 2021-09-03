const { unFollow } = require('../database/queries');

module.exports = (req, res) => {
  const { user } = req.params;
  const { username } = res;
  unFollow(username, user).then(res.redirect(`/user/${username}`));
};
