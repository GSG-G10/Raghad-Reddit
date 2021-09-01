const { join } = require('path');

module.exports = (req, res, next) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'userProfile.html'));
};
