const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const cookies = req.cookies.access_token;
  const username = jwt.decode(cookies);

  if (cookies) {
    jwt.verify(cookies, process.env.secretKey, (err) => {
      if (err) {
        next(err);
      } else {
        res.username = username;
        next();
      }
    });
  } else {
    res.redirect('/html/signIn.html');
  }
};
