import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Transaction from './model/Transaction.js';
import { getApiHealth } from './controllers/health.js';
import { postApiTransaction, getApiTransactions, putApiTransaction, deleteApiTrasaction, getApiTransactionsUserId} from './controllers/transaction.js';
import { postApiSignup , postApiLogin} from './controllers/user.js';


const app = express();
app.use(express.json());

const connectDB = async () => {

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        if (conn) {
            console.log('MongoDB connected');
        }
    }
    catch(e) {
        console.log(e.message);
    }
  
};
connectDB();

app.get('/api/health', getApiHealth );

//post / singup
app.post("/api/signup", postApiSignup );

//post/ login
app.post("/api/login", postApiLogin );

//post/ transaction
app.post('/api/transaction',  postApiTransaction );

//get/ transaction
app.get('/api/transactions', getApiTransactions );

//put/ transaction
app.put("/api/transaction/:id", putApiTransaction );

//delete/ transaction
app.delete("/api/transaction/:id", deleteApiTrasaction);

//get/transaction/user/:id
app.get("/api/transaction/user/:id", getApiTransactionsUserId);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
