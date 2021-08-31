const handleSignUp = require('./signUp');
const handleSignIn = require('./signIn');
const addToCookies = require('./addToCookies');
const checkUser = require('./checkUser');
const handleSignOut = require('./signOut');
const handleCommunityNames = require('./communityName');
const handleNewPosts = require('./newHomePosts');
const handleTopNowPosts = require('./topNowPosts');
const handleTopTodayPosts = require('./topTodayPosts');
const handleTopWeekPosts = require('./topWeekPosts');
const handleTopMonthPosts = require('./topMonthPosts');
const handleTopYearPosts = require('./topYearPosts');
const handleTopPosts = require('./topPosts');
const handleComments = require('./comments');
const handleSavePost = require('./savePost');
const handleUpVotePost = require('./upVotePost');
const handleDownVotePost = require('./downVotePost');

module.exports = {
  handleSignUp,
  handleSignIn,
  addToCookies,
  checkUser,
  handleSignOut,
  handleCommunityNames,
  handleNewPosts,
  handleTopNowPosts,
  handleTopTodayPosts,
  handleTopWeekPosts,
  handleTopMonthPosts,
  handleTopYearPosts,
  handleTopPosts,
  handleComments,
  handleSavePost,
  handleUpVotePost,
  handleDownVotePost,
};
