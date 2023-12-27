import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./ShowTransaction.css";
import Navbar from '../../components/Navbar/Navbar';

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


  useEffect(() =>{
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');
      
    if (storageUser?.email) {
         setUser(storageUser);
    }
    else{
      alert("you are not logged in ! ");
      window.location.href = "/login";
    }
    loadTrasaction();
    
  }, [])

  // useEffect(() =>{
  //   const storageUser = JSON.parse(localStorage.getItem("user") || '{}');

  //   if (storageUser?.username) {
  //        setUser(storageUser);
  //        alert("you are not logged in ! ");
  //        window.location.href = "/login";
  //   }
   
  //   loadTrasaction();
  // }, [])

  

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

              </div>
          )
        })
      }
    </div>
   </div>
  )
}
export default ShowTransaction