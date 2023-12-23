import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const loadTrasaction = async () => {
    const response = await axios.get("/get/transaction")

  };

  useEffect(() => {
    loadTrasaction();
  }, [])
  return (
    <div>
      <h1>All Expenses</h1>
    </div>
  )
  
}

export default App