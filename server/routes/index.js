const router = require('express').Router();
const cookieParse = require('cookie-parser');
const {
  handleSignUp, handleSignIn, addToCookies, checkUser, handleSignOut, handleCommunityNames,
} = require('../controllers');

router.use(cookieParse());
router.post('/sign-up', handleSignUp, addToCookies);
router.post('/sign-in', handleSignIn, addToCookies);
router.get('/sign-out', handleSignOut);
router.get('/check-user', checkUser);
router.get('/community', handleCommunityNames);

module.exports = router;
