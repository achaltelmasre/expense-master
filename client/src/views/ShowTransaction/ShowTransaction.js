import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./ShowTransaction.css";
import Navbar from '../../components/Navbar/Navbar';
import { Link } from "react-router-dom";
import showToast from 'crunchy-toast';


function ShowTransaction () {
  const [user, setUser] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [creditSum, setCreditSum] = useState(0);
  const [debitSum, setDebitSum] = useState(0);

  const CATEGORY_EMOJI_MAP = {
    "food": "🍔",
    "entertainment": "🎥",
    "rent": "🏠",
    "shopping": "🛍️",
    "travel": "✈️",
    "education": "🏘️",
    "salary":"💰",
    "freelancing": "💻",
    "side-hussle": "👔",
    "other": "🤷‍♀️"
  }

  const loadTrasaction = async () => {
    const response = await axios.get("/api/transactions");
    const transactionsData = response?.data?.data;
    
    let totalCredit = 0;
    let totalDebit = 0;

   transactionsData.forEach((transactions)=>{
      if (transactions.type==="credit") {
         totalCredit += transactions.amount;
      }
      else{
        totalDebit += transactions.amount;
      }
   })

   setCreditSum(totalCredit);
   setDebitSum(totalDebit);

    setTransactions(transactionsData);
  };

  const deleteTransaction = async (id) =>{
    const response = await axios.delete(`/api/transaction/${id}`)
   if (response?.data?.success) {
      loadTrasaction();
   }
   showToast('delete transaction successfully', 'success', 6000);
  }

  useEffect(() =>{
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');
      
    if (storageUser?.email) {
         setUser(storageUser);
    }
    else{
      showToast('Alert! An error occurred', 'alert', 6000);
      window.location.href = "/login";
    }
    loadTrasaction();
    
  }, [])
  

  return (
    <div className='App'>
    
        <Navbar/>

        <div className='m-5'>

   <div className='mb-5'>
      <span className='total-credit fs-2  ' >Credit: +{creditSum}</span>
      <span className='total-debit fs-2 '>Debit: -{debitSum}</span>
    </div>

      {
        transactions?.map((transactions, index) => {
          const {_id, amount, type, category, description, createdAt } = transactions
          
          const date = new Date(createdAt).toLocaleDateString();
          const time = new Date(createdAt).toLocaleTimeString();


          return (
            <div key= {index} className='transaction-card  '>
              <span className={`transaction-amount ${type==="debit" ? "debit-amount ": "credit-amount"}`}>
                {type==="debit" ? "-" : "+"}
                {amount}
                </span>
                { type==="debit" ? "debited" : "credite" } 
                  <span className='date'>Date: {date}</span>
                  <span className='time'>Time: {time}</span> 

                <span className='transaction-category'>
                  {CATEGORY_EMOJI_MAP [category]}
                  {category}
                  </span>
                  
                  <hr />
                  <p>
                    {description}
                  </p>

                  <span className='delete-btn'
                   onClick={() =>{ deleteTransaction(_id)}}>
                    🗑️
                  </span>
                  
                  <Link className='update-btn'
                    //  onClick={() => { updatedTransaction(_id)}}
                    to={`/updatetransaction/${_id}`} 
                    >
                    ✏️
                  </Link>

              </div>
          )
        })
      }
    </div>
   </div>
  )
}
export default ShowTransaction