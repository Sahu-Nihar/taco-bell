const validateCartDetails = (cartData) => {
    const { name, price } = cartData;

    if (!name || !price) return {
        success: false,
        message: "Please enter the required values: 'Name', 'Price'"
    };

    if (isNaN(price)) return {
        success: false,
        message: "Price should be a real number!"
    };

    return {
        success: true,
        message: 'Required values are provided!',
        data: {
            ...cartData,
            quantity: 1
        }
    };
};

module.exports = validateCartDetails;