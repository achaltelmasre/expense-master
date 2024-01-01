import React, { useEffect ,useState } from "react";
import axios from "axios";
import "./AddTransaction.css";
import Navbar from "./../../components/Navbar/Navbar";
import showToast from 'crunchy-toast';

function AddTransaction() {
  const [user, setUser] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");


  const Addtransaction = async () => {
    const response = await axios.post("/api/transaction", {
      amount: amount,
      type: type,
      category: category,
      description: description,
    });

    alert(response?.data?.message);

    if (response?.data?.message) {
      localStorage.setItem("add", JSON.stringify(response?.data?.data));
    }

    if (response?.data?.success) {
      alert(response?.data?.message);
      window.location.href = "./showtransaction";
    }
  };

  useEffect(() =>{
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');
      
    if (storageUser?.email) {
         setUser(storageUser);
    }
    else{
      showToast('you are not login', 'alert', 6000)

      window.location.href = "/login";
    }
    
  }, [])

  return (
    <>
      <div className="addtransaction">
        <Navbar />
        <form className="main-container">
          <h2 className="text-center p-3"> Add Transaction</h2>

          <div>
            <lable htmlFor="amount" className="fs-5">
              Amount :-
            </lable>
            <input
              type="text"
              placeholder="Enter amount....."
              id="amount"
              value={amount}
              className="input-form  fs-5"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>

          <div>
            <lable className=" fs-5"> Type :-</lable>
            <input
              type="radio"
              name="debit"
              id="debit"
              className="gender "
              checked={type === "debit"}
              onClick={(e) => {
                setType("debit");
              }}
            />
            <label htmlFor="debit" className="ms-1 fs-5">
              Debit{" "}
            </label>

            <input
              type="radio"
              name="credit"
              id="credit"
              className="gender "
              checked={type === "credit"}
              onClick={(e) => {
                setType("credit");
              }}
            />
            <label htmlFor="credit" className="ms-1 fs-5">
              Credit{" "}
            </label>
          </div>
          <div>
            <label for="category" className="fs-5 mt-2">Category :- </label>

            <select value={category} onChange={(e) => {
              setCategory(e.target.value)
            }} 
             name="cars" id="cars" className="ps-4 pe-3  ms-3">
            <option value="none">None</option>
            <option value="food">Food</option>
              <option value="shopping">Shopping</option>
              <option value="rent">Rent</option>
              <option value="travel">Travel</option>
              <option value="salary">Salary</option>
              <option value="education">Education</option>
              <option value="entertainment">entertainment</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <lable htmlFor="description" className="fs-5 mt-5" >Description :-</lable>
            <input
              type="text"
              placeholder="Enter your description"
              id="description"
              value={description}
              className="input-form mt-3"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>

          <button
            type="button"
            className=" button  m-4 ms-4  "
            onClick={Addtransaction}  >
            Add Transaction
          </button>
        </form>
      </div>
    </>
  );
}
export default AddTransaction;
