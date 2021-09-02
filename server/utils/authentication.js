const jwt = require('jsonwebtoken');
const { join } = require('path');

module.exports = (req, res, next) => {
  const token = req.cookies;

  if (token.access_token) {
    jwt.verify(token.access_token, process.env.secretKey)
      .then(() => {
        const username = jwt.decode(req.cookies.access_token);
        res.username = username;
        next();
      })
      .catch((err) => next(err));
  } else {
    res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'signIn.html'));
  }
};
