const signUpQuery = require('./signUpQuery');
const signInQuery = require('./signInQuery');
const getTopPostToday = require('./getTopPostToday');
const getTopPostNow = require('./getTopNowPosts');
const getCommunities = require('./getCommunities');
const getTopPostWeek = require('./getTopPostWeek');
const getTopPostMonth = require('./getTopPostMonth');
const getTopPostYear = require('./getTopPostYear');

module.exports = {
  signUpQuery,
  signInQuery,
  getTopPostToday,
  getTopPostNow,
  getCommunities,
  getTopPostWeek,
  getTopPostYear,
  getTopPostMonth,
};
