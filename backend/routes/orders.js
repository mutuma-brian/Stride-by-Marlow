const express = require('express');
const router = express.Router();
const { createOrder, getOrdersByUser, initiatePayment, mpesaCallback } = require('../controllers/orderController');
const auth = require('../middleware/auth');

router.post('/', auth, createOrder);
router.get('/user', auth, getOrdersByUser);
router.post('/initiate-payment', auth, initiatePayment);
router.post('/mpesa-callback', mpesaCallback);

module.exports = router;