import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Transaction from './model/Transaction.js';
import { getApiHealth } from './controllers/health.js';
import { postApiTransaction, getApiTransactions } from './controllers/transaction.js';

const app = express();
app.use(express.json());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    if (conn) {
        console.log('MongoDB connected');
    }
};
connectDB();

app.get('/api/health', getApiHealth );

app.post('/api/transaction',  postApiTransaction );

app.get('/api/transactions', getApiTransactions );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
