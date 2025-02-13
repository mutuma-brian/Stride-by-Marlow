const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const userRoutes = require('./routes/users');
const giftCardRoutes = require('./routes/giftCards');
const errorHandler = require('./middleware/errorHandler');

require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Api endpoints
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/images',express.static('uploads'))
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
app.use('/api/gift-cards', giftCardRoutes);

app.get("/",(req,res) => {
    res.send("API IKO CHONJO MZEE!")
    console.log(`Server is running at port : ${PORT}`)
})

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));