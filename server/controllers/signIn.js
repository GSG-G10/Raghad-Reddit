const { signInQuery } = require('../database/queries');
const { comparePassword } = require('../utils');

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  signInQuery(username).then(({ rows }) => {
    if (!rows.length) {
      res.cookie('error', 'You\'ve entered an invalid username');
      res.redirect('/');
    } else {
      const { password: hashedPassword } = rows[0];
      comparePassword(password, hashedPassword, (err, isMatch) => {
        if (isMatch) {
          next();
          res.redirect(`/user/${username}`);
        } else {
          res.cookie('error', 'You\'ve entered a wrong password');
          res.redirect('/');
        }
      });
    }
  });
};