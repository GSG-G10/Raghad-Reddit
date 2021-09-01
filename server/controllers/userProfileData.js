const jwt = require('jsonwebtoken');
const { getUserData } = require('../database/queries');

module.exports = (req, res) => {
  const cookies = req.cookies.access_token;
  const loggedInUser = jwt.decode(cookies);
  const searchedUser = req.params.username;
  let boolean;
  if (loggedInUser === searchedUser) {
    boolean = true;
  } else {
    boolean = false;
  }
  getUserData(searchedUser).then((data) => res.json({ boolean, data }));
};
