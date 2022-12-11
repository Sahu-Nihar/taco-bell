const bcrypt = require('bcryptjs');
const { SALT_ROUND } = require('../config/Constants');

const generateSalt = async (SALT_ROUND) => {
    const SALT = await bcrypt.genSalt(SALT_ROUND);
    return SALT; 
}

const generateHash = async (password) => {
    const SALT = await generateSalt(SALT_ROUND);
    const HASH = await bcrypt.hash(password, SALT);
    return HASH; 
};

module.exports = generateHash;