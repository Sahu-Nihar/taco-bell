const router = require('express').Router();

const { addToCart } = require('../controllers/cartController');

router.post('/cart/add', addToCart);

module.exports = router;