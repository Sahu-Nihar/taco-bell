const { EMAIL_REGEX } = require('../config/Constants');

const validateEmail = (emailId) => {
    return EMAIL_REGEX.test(emailId);
};

module.exports = {
    VERIFY_EMAIL: validateEmail,
}