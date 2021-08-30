module.exports = (req, res) => {
  res.clearCookie('access_token');
  res.redirect('/');
};
