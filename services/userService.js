const { Op } = require('sequelize');
const User = require('../models/t_user.model');
const comparePassword = require('../utils/comparePassword');
const generateHash = require('../utils/generateHash');
const issueJWT = require('../utils/issueJWT');
const validateSignIn = require('../validation/validateSignIn');

const validateSignUp = require('../validation/validateSignUp');

const validateUserExist = async (emailId) => {
    try {
        let emailExist = await User.findOne({
            where: {
                [Op.and]: [{
                    emailId: emailId
                }, {
                    isDeleted: false
                }]
            }
        });

        if (!emailExist) {
            return {
                success: true,
                message: 'User does not exist!'
            };
        }

        return {
            success: false,
            message: 'You are registered in Taco bell!'
        };
    }
    catch (error) {
        return {
            success: false,
            message: error
        };
    };
};

const functionToCreateUser = async (userData) => {
    try {
        const createUser = await User.create(userData);

        if (!createUser) return {
            success: false,
            message: 'Sorry cannot register the user!'
        }

        return {
            success: true,
            message: 'User has been registered!',
            data: createUser.dataValues
        }
    }
    catch (error) {
        return {
            success: false,
            message: error
        }
    };
};

const verifyRegisteredUser = async (emailId, password) => {
    try {
        const registeredUser = await User.findOne({
            where: {
                [Op.and]: [{
                    emailId: emailId
                }, {
                    isDeleted: false
                }]
            }
        });

        if (!registeredUser) return {
            success: false,
            message: 'User is not registered!'
        }

        const HASH = registeredUser.dataValues.password;

        const verifyPassword = await comparePassword(password, HASH);

        if (!verifyPassword.success) return verifyPassword;

        return {
            success: true,
            message: 'User is registered!',
            data: {
                userId: registeredUser.dataValues.id,
                emailId: registeredUser.dataValues.emailId
            }
        };
    }
    catch (error) {
        return {
            success: false,
            message: error
        }
    }
}

const useSignUpService = async (userData) => {
    try {
        const { emailId, password } = userData;

        const validateUserData = validateSignUp(userData);

        if (!validateUserData.success) return validateUserData;

        const verifyIfUserExist = await validateUserExist(emailId);

        if (!verifyIfUserExist.success) return verifyIfUserExist;

        const HASH = await generateHash(password);

        const newUserData = {
            name: validateUserData.data.name,
            emailId: validateUserData.data.emailId,
            password: HASH
        };

        const createNewUser = await functionToCreateUser(newUserData);

        if (!createNewUser.success) return createNewUser;

        const userId = createNewUser.data.id;

        const accessToken = issueJWT(userId);

        return {
            success: true,
            message: 'User has been registered!',
            data: {
                userId: userId,
                emailId: emailId,
                accessToken: accessToken.token,
                status: 'REGISTERED'
            }
        };
    }
    catch (error) {
        return {
            success: false,
            message: error
        };
    };
};

const userSignInService = async (userData) => {
    try {
        const { emailId, password } = userData;

        const verifyUserData = validateSignIn(userData);

        if (!verifyUserData.success) return verifyUserData;

        const validateRegisteredUser = await verifyRegisteredUser(emailId, password);

        if (!validateRegisteredUser.success) return validateRegisteredUser;

        const registeredData = validateRegisteredUser.data;

        let accessToken = issueJWT(registeredData.userId);

        return {
            success: true,
            message: 'User has logged in',
            data: {
                ...registeredData,
                accessToken: accessToken.token,
                status: 'LOGGED IN'
            }
        };
    }
    catch (error) {
        return {
            success: false,
            message: error
        }
    }
}

module.exports = {
    useSignUpService,
    userSignInService
}