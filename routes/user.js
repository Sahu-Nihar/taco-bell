const router = require('express').Router();

const { userSignUp, userSingIn } = require('../controllers/userController');

router.post('/user/signUp', userSignUp);
router.post('/user/signIn', userSingIn);

module.exports = router;