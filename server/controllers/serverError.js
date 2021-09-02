const { join } = require('path');

module.exports = (error, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', 'html', '500.html'));
};
