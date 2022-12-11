const { addToCartService, viewCartService, deleteCartService } = require('../services/cartService');

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

const viewCart = async (req, res) => {
    const cart = await viewCartService(req.headers.authorization);

    if (cart.success) {
        res
        .status(200)
        .json(cart);
    }
    else if (!cart.success && cart.message == ErrorMessage.Cart_Error.Error_1) {
        res
        .status(401)
        .json(cart);
    }
    else if (!cart.success && cart.message == ErrorMessage.Cart_Error.Error_2 || cart.message == ErrorMessage.Cart_Error.Error_2) {
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

const deleteCart = async (req, res) => {
    const cart = await deleteCartService(req.headers.authorization, req.params.id);

    if (cart.success) {
        res
        .status(200)
        .json(cart);
    }
    else if (!cart.success && cart.message == ErrorMessage.Cart_Error.Error_1) {
        res
        .status(401)
        .json(cart);
    }
    else if (!cart.success && cart.message == ErrorMessage.Cart_Error.Error_2 || cart.message == ErrorMessage.Cart_Error.Error_7) {
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
    addToCart,
    viewCart,
    deleteCart
};