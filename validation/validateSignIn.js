const { VERIFY_EMAIL } = require("./validateEmail");

const validateSignIn = (userData) => {
    const {emailId, password} = userData;

    if (!emailId || !password) return {
        success: false,
        message: "Please provide required details: 'EmailId', 'Password'"
    };

    let verifyEmail = VERIFY_EMAIL(emailId);

    if (!verifyEmail) return {
        success: false,
        message: 'Enter a valid Email Id'
    };

    return {
        success: true,
        message: 'Required fields are provided!',
        data: userData
    };
}

module.exports = validateSignIn;