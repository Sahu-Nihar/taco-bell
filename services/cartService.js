const { Op } = require('sequelize');
const Cart = require('../models/t_cart.model');

const { validateLoggedInUser } = require('../services/userService');
const validateCartDetails = require('../validation/validateCartDetails');

const bulkUpload = async (verifiedArr) => {
    try {
        let createCart = await Cart.bulkCreate(verifiedArr);

        if (createCart.length < 1) return {
            success: false,
            message: 'Could not add to the cart!'
        };

        let cartList = createCart.map(cart => cart.dataValues);

        return {
            success: true,
            message: 'Added to cart!',
            data: cartList
        };
    }
    catch (error) {
        return {
            success: false,
            message: error
        }
    }
}

const getCartDetails = async (userId) => {
    try {
        const cartDetails = await Cart.findAll({
            where: {
                userId: userId
            }
        });

        if (!cartDetails) return {
            success: false,
            message: 'No cart items found!'
        };

        const cartArr = cartDetails.map(cart => cart.dataValues);
        let totalPrice = 0;

        cartArr.forEach(element => {
            totalPrice += element.price
        });

        console.log('Total Price:', totalPrice);

        return {
            success: true,
            message: 'Cart item found!',
            data: {
                items: cartArr,
                totalPrice: totalPrice
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

const addToCartService = async (authorizationToken, cartJSON) => {
    try {
        let loggedInUser = await validateLoggedInUser(authorizationToken);

        if (!loggedInUser.success) return loggedInUser;

        let verifiedArr = [];
        let rejectedArr = [];

        for (let index in cartJSON) {
            let validateCartObject = validateCartDetails(cartJSON[index]);

            if (!validateCartObject.success) {
                let rejectedObj = {
                    ...cartJSON[index],
                    message: validateCartObject.message 
                };
                rejectedArr = [...rejectedArr, rejectedObj];
            }
            else {
                let uploadObject = {
                    ...validateCartObject.data,
                    userId: loggedInUser.data
                }

                let duplicateIndex = verifiedArr.findIndex(item => item.name == uploadObject.name);
                if (duplicateIndex > -1) {
                    verifiedArr[duplicateIndex].quantity += 1;
                    verifiedArr[duplicateIndex].price *= verifiedArr[duplicateIndex].quantity;
                }
                else {
                    verifiedArr = [...verifiedArr, uploadObject];
                }
            }
        }
        console.log('Date:', new Date(), 'Verified Data:', verifiedArr);
        console.log('Date:', new Date(), 'Rejected Data:', rejectedArr);

        if (rejectedArr.length == cartJSON.length) return {
            success: false,
            message: 'Cart values are not verified!',
            data: rejectedArr
        }

        const addToCartTable = await bulkUpload(verifiedArr);

        if (!addToCartTable.success) return addToCartTable;

        return {
            success: true,
            message: 'Products were added to cart!',
            data: {
                acceptedCartItems: addToCartTable.data,
                rejectedCartItems: rejectedArr
            }
        }
    }
    catch (error) {
        return {
            success: false,
            message: error
        };
    };
};

const viewCartService = async (authorizationToken) => {
    try {
        const loggedInUser = await validateLoggedInUser(authorizationToken);

        if (!loggedInUser.success) return loggedInUser;

        const loggedInUserId = loggedInUser.data;

        const cartDetails = await getCartDetails(loggedInUserId);

        return cartDetails;
    }
    catch (error) {
        return {
            success: false,
            message: error
        }
    }
}


module.exports = {
    addToCartService,
    viewCartService
}