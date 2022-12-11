const { UUID, UUIDV4, STRING, INTEGER, REAL } = require('sequelize');

const sequelize = require('../db/db');

const Cart = sequelize.define('Cart', {
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
    price: {
        type: REAL,
        allowNull: false
    },
    quantity: {
        type: INTEGER,
        allowNull: false
    },
    userId: {
        type: STRING,
        allowNull: false
    }
});

module.exports = Cart;