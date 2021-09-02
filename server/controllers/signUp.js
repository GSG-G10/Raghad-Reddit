const { signUpQuery } = require('../database/queries');
const { hashPassword } = require('../utils');

module.exports = (req, res, next) => {
  const { username, password, email } = req.body;
  hashPassword(password, (err, hashedPassword) => {
    if (err) {
      next(err);
    } else {
      signUpQuery(username, hashedPassword, email)
        .then(() => {
          next();
        })
        .catch(() => {
          res.cookie('error', 'The username or the email you entered have been already used');
          res.redirect('/html/signUp.html');
        });
    }
  });
};
