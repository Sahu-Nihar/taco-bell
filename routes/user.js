const router = require('express').Router();

const { userSignUp, userSingIn } = require('../controllers/userController');

router.post('/signUp', userSignUp);
router.post('/signIn', userSingIn);

module.exports = router;