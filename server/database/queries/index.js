const signUpQuery = require('./signUpQuery');
const signInQuery = require('./signInQuery');
const getTopPostToday = require('./getTopPostToday');
const getTopPostNow = require('./getTopNowPosts');
const getCommunities = require('./getCommunities');
const getTopPostWeek = require('./getTopPostWeek');
const getTopPostMonth = require('./getTopPostMonth');
const getTopPostYear = require('./getTopPostYear');
const getNewPosts = require('./getNewPosts');
const getTopPosts = require('./getTopPosts');
const getComments = require('./getComments');
const savePost = require('./savePost');
const upVotePost = require('./upVotePost');
const downVotePost = require('./downVotePost');
const getUserData = require('./getUserData');
const getUserAllPost = require('./getAllUserPost');
const getUserAllComment = require('./getUserComments');
const getUserFollowing = require('./getUserFollowing');
const getUserSaved = require('./getUserSaved');
const addPostData = require('./addPostData');
const addComment = require('./addComment');
const changePic = require('./changePic');
const unSavePost = require('./unSavePost');
const deletePost = require('./deletePost');
const unFollow = require('./unFollow');
const deleteComment = require('./deleteComment');
const downVoteComment = require('./downVoteComment');
const upVoteComment = require('./upVoteComment');
const followUser = require('./followUser');

module.exports = {
  signUpQuery,
  signInQuery,
  getTopPostToday,
  getTopPostNow,
  getCommunities,
  getTopPostWeek,
  getTopPostYear,
  getTopPostMonth,
  getNewPosts,
  getTopPosts,
  getComments,
  savePost,
  upVotePost,
  downVotePost,
  getUserData,
  getUserAllPost,
  getUserAllComment,
  getUserFollowing,
  getUserSaved,
  addPostData,
  addComment,
  changePic,
  unSavePost,
  deletePost,
  unFollow,
  deleteComment,
  downVoteComment,
  upVoteComment,
  followUser,
};
