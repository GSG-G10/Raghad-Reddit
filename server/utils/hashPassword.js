const bcrypt = require('bcryptjs');

module.exports = (password, callback) => {
  bcrypt.hash(password, 10).then((res) => callback(null, res)).catch((err) => callback(err));
};
