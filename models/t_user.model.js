const { UUID, UUIDV4, STRING, BOOLEAN } = require('sequelize');

const sequelize = require('../db/db');

const User = sequelize.define('User', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: STRING,
        allowNull: false
    },
    emailId: {
        type: STRING,
        validate: {
            isEmail: true
        },
        unique: true,
        allowNull: false
    },
    password: {
        type: STRING,
        allowNull: false
    },
    isDeleted: {
        type: BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
});

module.exports = User;