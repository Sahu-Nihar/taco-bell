const bcrypt = require('bcryptjs');

const comparePassword = async (password, HASH) => {
    try {
        let response = await bcrypt.compare(password, HASH);

        if (!response) return {
            success: false,
            message: 'Incorrect password!'
        };

        return {
            success: true,
            message: 'Correct Password!'
        }
    }
    catch (error) {
        return {
            success: false,
            message: error
        }
    }
};

module.exports = comparePassword;