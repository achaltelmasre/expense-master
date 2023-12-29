import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./ShowTransaction.css";
import Navbar from '../../components/Navbar/Navbar';
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

  
  const updateTransaction = async () => {
    const response = await axios.put("/api/transaction/:id")
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

      <h2 >Credit: {creditSum}</h2>
      <h2>Debit: {debitSum}</h2>

      {
        transactions?.map((transactions, index) => {
          const {_id, amount, type, category, description, createdAt } = transactions
          
          const date = new Date(createdAt).toLocaleDateString();
          const time = new Date(createdAt).toLocaleTimeString();


          return (
            <div key= {index} className='transaction-card'>
              <span className={`transaction-amount ${type==="debit" ? "debit-amount ": "credit-amount"}`}>
                {type==="debit" ? "-" : "+"}
                {amount}
                </span>
                { type==="debit" ? "debited" : "credite" } on {date} at {time}

                <span className='transaction-category'>
                  {CATEGORY_EMOJI_MAP [category]}
                  {category}
                  </span>
                  
                  <hr />
                  <p>
                    {description}
                  </p>

                  <span className=''
                   onClick={() =>{ deleteTransaction(_id)}}>
                    🗑️
                  </span>
                  
                  <span
                     onClick={() => { updateTransaction(_id)}}>
                    ✏️
                  </span>

              </div>
          )
        })
      }
    </div>
   </div>
  )
}
export default ShowTransaction