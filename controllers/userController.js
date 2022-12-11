const { useSignUpService, userSignInService } = require('../services/userService');

const ErrorMessage = require('../config/Error');

const userSignUp = async (req, res) => {
    const user = await useSignUpService(req.body);

    if (user.success) {
        res
        .status(201)
        .json(user);
    }
    else if (!user.success && user.message == ErrorMessage.User_Error.Error_1 || user.message == ErrorMessage.User_Error.Error_3 || user.message == ErrorMessage.User_Error.Error_5) {
        res
        .status(404)
        .json(user);
    }
    else if (!user.success && user.message == ErrorMessage.User_Error.Error_4 || user.message == ErrorMessage.User_Error.Error_2) {
        res
        .status(401)
        .json(user);
    }
    else if (!user.success){
        res
        .status(400)
        .json(user);
    }
};

const userSingIn = async (req, res) => {
    const user = await userSignInService(req.body);

    if (user.success) {
        res
        .status(200)
        .json(user);
    }
    else if (!user.success && user.message == ErrorMessage.User_Error.Error_6 ) {
        res
        .status(404)
        .json(user);
    }
    else if (!user.success && user.message == ErrorMessage.User_Error.Error_7) {
        res
        .status(403)
        .json(user);
    }
    else if (!user.success) {
        res
        .status(400)
        .json(user);
    }
}

module.exports = {
    userSignUp,
    userSingIn
};