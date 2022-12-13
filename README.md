# TACO BELL ASSIGNMENT BACKEND CODE

## Installing The Dependency

Install the dependency by running the following code in your terminal:

**npm install**

## Running the Code

To run the server run the following command in your terminal:

**npm run dev**

## API END POINTS:

    - SIGN-UP: http://18.225.10.147:4000/api/v1/user/signUp
        - Request payload: {
            "name": <your_name>,
            "emailId": <your_email_address>
            "password": <your_password>
        }
        - Response payload: {
            success: true,
            message: 'User has been registered!',
            data: {
                userId: <registered_user_id>,
                emailId: <registered_email_id>,
                accessToken: <accessToken>,
                status: 'REGISTERED'
            }
        }

    - SIGN-IN: http://18.225.10.147:4000/api/v1/user/signIn
        - Request payload: {
            "emailId": <registered_email_id>,
            "password": <your_password>
        }
        - Response payload: {
            success: true,
            message: 'User has logged in',
            data: {
                userId: <registered_user_id>,
                emailId: <registered_email_id>,
                accessToken: <accessToken>,
                status: 'LOGGED IN'
            }
        }

    - ADD-TO-CART: http://18.225.10.147:4000/api/v1/cart/add
        - Request payload: [
            {
                "name": <product_name>,
                "price": <product_price>
            },
            {
                "name": <product_name>,
                "price": <product_price>
            },
            {
                "name": <product_name>,
                "price": <product_price>
            }
        ]
        - Response payload: {
            success: true,
            message: 'Products were added to cart!',
            data: {
                acceptedCartItems: [array_of_objects],
                rejectedCartItems: [array_of_rejected_if_any]
            }
        }

    - VIEW_CART: http://18.225.10.147:4000/api/v1/cart/view
        - Request: authorization_token,
        - Response payload: {
            success: true,
            message: 'Cart item found!',
            data: {
                items: [array_of_cart_items_of_user],
                totalPrice: total_price_of_cart_item
            }
        }

    - DELETE CART: http://18.225.10.147:4000/api/v1/cart/delete/:id
        - Request: authorization_token, id: cart_item_id
        - Response payload: {
            success: true,
            message: 'Item deleted from cart!'
        }