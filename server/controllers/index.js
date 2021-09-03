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
const handleUserProfile = require('./userProfile');
const handleProfileData = require('./userProfileData');
const handleUserPost = require('./userAllPost');
const handleUserComment = require('./userAllComment');
const handleUserFollowing = require('./userFollowing');
const handleUserSaved = require('./userSaved');
const handleCreatePost = require('./createPost');
const handleAddComment = require('./addComment');
const handleChangePic = require('./changePic');
const handleServerError = require('./serverError');
const handleErrorNotFound = require('./errorNotFound');
const handleUnSavePost = require('./unSavePost');
const handleDeletePost = require('./deletePost');
const handleUnFollow = require('./unFollow');

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
  handleUserProfile,
  handleProfileData,
  handleUserPost,
  handleUserComment,
  handleUserFollowing,
  handleUserSaved,
  handleCreatePost,
  handleAddComment,
  handleChangePic,
  handleErrorNotFound,
  handleServerError,
  handleUnSavePost,
  handleDeletePost,
  handleUnFollow,
};
