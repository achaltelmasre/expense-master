import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UpdateTransaction.css";
import Navbar from "./../../components/Navbar/Navbar";

import showToast from "crunchy-toast";

function UpdateTransaction() {
  const [user, setUser] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  const loadTrasaction = async () => {
    const response = await axios.get(`/api/transaction/${id}`);

    const { amount, type, category, description } = response?.data?.data;
    setAmount(amount);
    setType(type);
    setCategory(category);
    setDescription(description);
  };

  useEffect(() => {
    loadTrasaction();
  }, []);

  const UpdateTransaction = async () => {

    const updatedTransaction = { amount, type, category, description }

    const response = await axios.put(`/api/transaction/${id}`, updatedTransaction);

            alert(response?.data?.message);
            window.location.href = "/showtransaction"; 
     };

  return (
    <>
      <div className="addtransaction">
        <Navbar />
        <form className="main-container">
          <h2 className="text-center p-3"> Update Transaction</h2>

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
            <label for="category" className="fs-5 mt-2">
              Category :-{" "}
            </label>

            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              name="cars"
              id="cars"
              className="ps-4 pe-3  ms-3"
            >
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
            <lable htmlFor="description" className="fs-5 mt-5">
              Description :-
            </lable>
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
            onClick={UpdateTransaction}
          >
            Update Transaction
          </button>
        </form>
      </div>
    </>
  );
}
export default UpdateTransaction;
