const router = require('express').Router();
const cookieParse = require('cookie-parser');
const { authentication } = require('../utils');
const {
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
  handleUserSaved,
  handleUserFollowing,
  handleCreatePost,
  handleAddComment,
  handleChangePic,
  handleErrorNotFound,
  handleServerError,
  handleUnSavePost,
  handleDeletePost,
} = require('../controllers');

router.use(cookieParse());
router.post('/sign-up', handleSignUp, addToCookies);
router.post('/sign-in', handleSignIn, addToCookies);
router.get('/sign-out', handleSignOut);
router.get('/check-user', checkUser);
router.get('/community', handleCommunityNames);
router.get('/new-posts', handleNewPosts);
router.get('/top-now-posts', handleTopNowPosts);
router.get('/top-today-posts', handleTopTodayPosts);
router.get('/top-week-posts', handleTopWeekPosts);
router.get('/top-month-posts', handleTopMonthPosts);
router.get('/top-year-posts', handleTopYearPosts);
router.get('/top-all-posts', handleTopPosts);
router.get('/comments/:postId', handleComments);
router.get('/save-post/:postId', authentication, handleSavePost);
router.get('/unsave-post/:postId', authentication, handleUnSavePost);
router.get('/up-vote/:postId', authentication, handleUpVotePost);
router.get('/down-vote/:postId', authentication, handleDownVotePost);
router.get('/user/:username', handleUserProfile);
router.get('/user/:username/profile', handleProfileData);
router.get('/all-post/:username', handleUserPost);
router.get('/all-comment/:username', handleUserComment);
router.get('/saved', authentication, handleUserSaved);
router.get('/following/:username', handleUserFollowing);
router.post('/add-comment/:postId', authentication, handleAddComment);
router.post('/change-pic', handleChangePic);
router.post('/create-post', authentication, handleCreatePost);
router.get('/delete-post/:postId', authentication, handleDeletePost);
router.use(handleErrorNotFound);
router.use(handleServerError);

module.exports = router;
