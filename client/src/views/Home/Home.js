import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {Link} from "react-router-dom"

import "./Home.css";


function Home () {
    
    return(
        <>
         <div >
            <Navbar/>
             <div className="homecontainer" >
                <h2 className="text-warning display-2 m-5 fw-bold ">Expense Master</h2>

                <h2 className="text-light ms-5">The Most Convenient & Easiest Way to Track Your Money</h2>

                <h6 className="text-light fs-4 ms-5 mt-5  text  ">This app helps you understand your money better. Whether you want to see where your money goes each month or keep track of where you earn, this app gives you clear information. You can organize your transactions by date or amount, so you can easily see and understand your financial information in the way that's easiest for you.</h6>


                <Link to="/addtransaction">
                    <button type="button" class="btn btn-danger ms-5 mt-3 m-5 fs-4 button " >Add Transaction ➡️</button>
                </Link>

             </div>

            

             

         </div>

        
        </>
    )
    
}
export default Home