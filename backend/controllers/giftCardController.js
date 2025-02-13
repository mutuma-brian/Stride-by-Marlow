const GiftCard = require('../models/GiftCard');
const User = require('../models/User');
const { sendEmail } = require('../utils/emailService');

exports.createGiftCard = async (req, res) => {
  try {
    const { amount, recipientEmail, message } = req.body;
    const sender = req.user.id;

    const newGiftCard = new GiftCard({
      amount,
      sender,
      recipientEmail,
      message,
    });

    const giftCard = await newGiftCard.save();

    // Send email to recipient
    await sendEmail(
      recipientEmail,
      'You received a gift card!',
      `You have received a gift card worth KES ${amount} from Stride by Marlow. Message: ${message}`
    );

    res.status(201).json(giftCard);
  } catch (error) {
    res.status(500).json({ message: 'Error creating gift card', error: error.message });
  }
};

exports.redeemGiftCard = async (req, res) => {
  try {
    const { code } = req.body;
    const user = req.user.id;

    const giftCard = await GiftCard.findOne({ code, isRedeemed: false });

    if (!giftCard) {
      return res.status(404).json({ message: 'Invalid or already redeemed gift card' });
    }

    giftCard.isRedeemed = true;
    giftCard.redeemedBy = user;
    await giftCard.save();

    // Add balance to user's account
    await User.findByIdAndUpdate(user, { $inc: { balance: giftCard.amount } });

    res.json({ message: 'Gift card redeemed successfully', amount: giftCard.amount });
  } catch (error) {
    res.status(500).json({ message: 'Error redeeming gift card', error: error.message });
  }
};

exports.getGiftCardsByUser = async (req, res) => {
  try {
    const giftCards = await GiftCard.find({ sender: req.user.id });
    res.json(giftCards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gift cards', error: error.message });
  }
};