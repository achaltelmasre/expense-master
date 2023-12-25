import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storageUse = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storageUse);
  }, []);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <a class="navbar-brand" href="#">
          EXPENSE MASTERS
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/addtransaction" class="nav-link">
                AddTransaction
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/showtransaction" class="nav-link">
                ShowTransaction
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/signup" class="nav-link">
                Signup
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/Login" class="nav-link">
                Login
              </Link>
            </li>
          </ul>
          <div>
            Hello , <span className="user"> {user.name || "User!"}</span>
            {user?.name ? (
              <span
                className="navbar-logout"
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.href = "/login";
                }}
              >
                Logout
              </span>
            ) : null}
            
            {/* <span class="navbar-text">Hello User!</span> */}
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
