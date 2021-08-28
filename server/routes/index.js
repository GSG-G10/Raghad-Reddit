const router = require('express').Router();
const { handleSignUp } = require('../controllers');

router.post('/sign-up', handleSignUp);

module.exports = router;
