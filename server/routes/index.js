const router = require('express').Router();
const { handleSignUp, handleSignIn, addToCookies } = require('../controllers');

router.post('/sign-up', handleSignUp, addToCookies);
router.post('/sign-in', handleSignIn, addToCookies);

module.exports = router;
