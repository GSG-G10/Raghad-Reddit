const { compare } = require('bcryptjs');

module.exports = (password, hashedPassword, callback) => {
  compare(password, hashedPassword)
    .then((isMatch) => callback(null, isMatch))
    .catch((err) => callback(err));
};
