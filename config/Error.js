const ErrorMessage = {
    User_Error: {
        Error_1: "Please provide required details: 'Name', 'EmailId', 'Password'",
        Error_2: "Password length must be at least 8 characters!",
        Error_3: "Enter a valid Email Id",
        Error_4: "You are registered in Taco bell!",
        Error_5: "Sorry cannot register the user!",
        Error_6: "Please provide required details: 'EmailId', 'Password'",
        Error_7: "User is not registered!",
    },
    Cart_Error: {
        Error_1: "Invalid authorization token!",
        Error_2: "User not found!",
        Error_3: "Please enter the required values: 'Name', 'Price'",
        Error_4: "Price should be a real number!",
        Error_5: "Could not add to the cart!",
        Error_6: "No cart items found!"
    }
};

module.exports = ErrorMessage;