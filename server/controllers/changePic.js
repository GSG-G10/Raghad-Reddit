const { changePic } = require('../database/queries');

module.exports = (req, res) => {
  const { url } = req.body;
  const { username } = res;
  changePic(username, url)
    .then(() => res.redirect('/'));
};
