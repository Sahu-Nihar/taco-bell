const { VERIFY_EMAIL } = require('./validateEmail');

const validateSignUp = (userData) => {
    const { name, emailId, password } = userData;

    if (!name || !emailId || !password) return {
        success: false,
        message: "Please provide required details: 'Name', 'EmailId', 'Password'"
    };

    if (password.length < 8) {
        return {
            success: false,
            message: 'Password length must be at least 8 characters!'
        }
    }

    let verifyEmail = VERIFY_EMAIL(emailId);

    if (!verifyEmail) return {
        success: false,
        message: 'Enter a valid Email Id'
    }

    return {
        success: true,
        message: 'Required fields are provided!',
        data: userData
    };
}

module.exports = validateSignUp;