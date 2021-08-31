const router = require('express').Router();
const cookieParse = require('cookie-parser');
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
  upVotePost,
  downVotePost,
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
router.get('/save-post/:postId', handleSavePost);
router.get('/up-vote/:postId', upVotePost);
router.get('/down-post/:postId', downVotePost);

module.exports = router;
