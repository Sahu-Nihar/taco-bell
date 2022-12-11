const { addToCartService } = require('../services/cartService');

const ErrorMessage = require('../config/Error');

const addToCart = async (req, res) => {
    const cart = await addToCartService(req.headers.authorization, req.body);

    if (cart.success) {
        res
        .status(201)
        .json(cart);
    }
    else if (!cart.success && cart.message == ErrorMessage.Cart_Error.Error_1) {
        res
        .status(401)
        .json(cart);
    }
    else if (!cart.success && cart.message == ErrorMessage.Cart_Error.Error_2 || cart.message == ErrorMessage.Cart_Error.Error_3 || cart.message == ErrorMessage.Cart_Error.Error_4 || cart.message == ErrorMessage.Cart_Error.Error_5) {
        res
        .status(404)
        .json(cart);
    }
    else if (!cart.success) {
        res
        .status(400)
        .json(cart);
    }
}

module.exports = {
    addToCart
};