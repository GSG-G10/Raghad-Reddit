const handleSignUp = require('./signUp');
const handleSignIn = require('./signIn');
const addToCookies = require('./addToCookies');
const checkUser = require('./checkUser');
const handleSignOut = require('./signOut');
const handleCommunityNames = require('./communityName');
const handleNewPosts = require('./newHomePosts');

module.exports = {
  handleSignUp,
  handleSignIn,
  addToCookies,
  checkUser,
  handleSignOut,
  handleCommunityNames,
  handleNewPosts,
};
