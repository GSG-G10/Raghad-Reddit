const { sign } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { username } = req.body;
  sign(username, process.env.secretKey, (err, token) => {
    if (err) {
      next(err);
    } else {
      res.cookie('access_token', token, { httpOnly: true, secure: true }).redirect('/');
    }
  });
};
