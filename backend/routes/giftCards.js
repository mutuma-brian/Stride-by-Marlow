const express = require('express');
const router = express.Router();
const { createGiftCard, redeemGiftCard, getGiftCardsByUser } = require('../controllers/giftCardController');
const auth = require('../middleware/auth');

router.post('/', auth, createGiftCard);
router.post('/redeem', auth, redeemGiftCard);
router.get('/user', auth, getGiftCardsByUser);

module.exports = router;