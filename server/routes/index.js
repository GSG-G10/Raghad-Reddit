const router = require('express').Router();
const cookieParse = require('cookie-parser');
const {
  handleSignUp, handleSignIn, addToCookies, checkUser,
} = require('../controllers');

router.use(cookieParse());
router.post('/sign-up', handleSignUp, addToCookies);
router.post('/sign-in', handleSignIn, addToCookies);
router.get('/check-user', checkUser);

module.exports = router;
