const Order = require('../models/Order');
const { getAccessToken, mpesaConfig } = require('../config/mpesa');
const axios = require('axios');

exports.createOrder = async (req, res) => {
  try {
    const { user, products, totalAmount, shippingAddress } = req.body;
    const newOrder = new Order({
      user,
      products,
      totalAmount,
      shippingAddress,
    });
    const order = await newOrder.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.initiatePayment = async (req, res) => {
  try {
    const { phoneNumber, amount } = req.body;
    const accessToken = await getAccessToken();

    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(`${mpesaConfig.shortcode}${mpesaConfig.passkey}${timestamp}`).toString('base64');

    const response = await axios.post(
      'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
      {
        BusinessShortCode: mpesaConfig.shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: mpesaConfig.shortcode,
        PhoneNumber: phoneNumber,
        CallBackURL: mpesaConfig.callbackUrl,
        AccountReference: 'Stride by Marlow',
        TransactionDesc: 'Payment for order',
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error initiating M-Pesa payment:', error);
    res.status(500).send('Server error');
  }
};

exports.mpesaCallback = async (req, res) => {
  // Handle M-Pesa callback
  const { Body } = req.body;

  if (Body.stkCallback.ResultCode === 0) {
    // Payment successful
    // Update order status or perform other actions
    console.log('Payment successful:', Body.stkCallback);
  } else {
    // Payment failed
    console.log('Payment failed:', Body.stkCallback);
  }

  res.json({ message: 'Callback received' });
};