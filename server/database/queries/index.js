const signUpQuery = require('./signUpQuery');
const signInQuery = require('./signInQuery');
const getTopPostToday = require('./getTopPostToday');
const getTopPostNow = require('./getTopNowPosts');
const getCommunities = require('./getCommunities')

module.exports = {
  signUpQuery, signInQuery, getTopPostToday, getTopPostNow, getCommunities,
};
