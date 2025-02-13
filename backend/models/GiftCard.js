const mongoose = require('mongoose');
const crypto = require('crypto');

const GiftCardSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    default: () => crypto.randomBytes(8).toString('hex'),
  },
  amount: {
    type: Number,
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  recipientEmail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  isRedeemed: {
    type: Boolean,
    default: false,
  },
  redeemedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('GiftCard', GiftCardSchema);