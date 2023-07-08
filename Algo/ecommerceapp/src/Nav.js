import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

export default function Nav() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logoutClick = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
      {auth ? 
        <ul className="nav-ul">
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/add">Addproduct</Link>
          </li>
          <li>
            <Link to="/update/:id">Update</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logoutClick} to="/signup">
            Logout {JSON.parse(auth).full_name}
            </Link>
          </li>
        </ul>
       : 
        <ul className="nav-ul">
          <li >
            <Link  to="/signup">Signup</Link>
          </li>
          <li>
            <Link  to="/login">Login</Link>
          </li>
        </ul>
      }
    </div>
  );
}
