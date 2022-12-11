const router = require('express').Router();

const { addToCart, viewCart } = require('../controllers/cartController');

router.post('/cart/add', addToCart);
router.get('/cart/view', viewCart);

module.exports = router;