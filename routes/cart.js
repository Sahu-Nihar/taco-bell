const router = require('express').Router();

const { addToCart, viewCart, deleteCart } = require('../controllers/cartController');

router.post('/cart/add', addToCart);
router.get('/cart/view', viewCart);
router.delete('/cart/delete/:id', deleteCart);

module.exports = router;