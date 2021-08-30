const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const cookies = req.cookies.access_token;
  const decoded = jwt.decode(cookies);
  res.json(decoded);
};
