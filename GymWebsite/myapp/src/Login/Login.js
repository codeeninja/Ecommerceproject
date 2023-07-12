import React, { useEffect, useState } from 'react'
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email,setemail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  // const handelSubmit= async (e)=>{
  //   e.preventDefault();
  //   // let result=true;
  //   // if(username.trim()===""||username===null){
  //   //   result=false;
  //   //   toast.warning("Enter Username");
  //   // }else if (!/\S+@\S+\.\S+/.test(username)) {
  //   //   result = false;
  //   //   toast.warning("Please enter a valid email address");
  //   // }
  //   // if(password.trim()===""||password===null){
  //   //   result = false;
  //   //   toast.warning("Enter Passwoed")
  //   // }
    
  //   // if(result){
  //   //   navigate("/")
  //   // }
  //   console.log(email,password);
  //   var result=await fetch('http://localhost:5000/login',{
  //       method:'post',
  //       body:JSON.stringify({email,password}),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     result=await result.json()
  //    console.warn(result);
  //    if(!result.error){
  //     localStorage.setItem('user',JSON.stringify(result))
  //      navigate('/Adduser');
  //    }
  //    else{
  //     alert("Invalid Email or Password")
  //    }

  // }
  const handleLogin = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:5000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    console.log(result);

    if (!result.error) {
      localStorage.setItem('user', JSON.stringify(result));
      if (result.role === 'admin') {
        navigate('/Adduser');
      } else if (result.role === 'client') {
        navigate('/dashboard');
        localStorage.setItem('user',JSON.stringify(result))
      }
    } else {
      alert('Invalid Email or Password');
    }
  };
  return (
    <div className="main-screen">
      <ToastContainer />
      <Navbar className="btn-3" bg="dark" expand="lg">
          <Navbar.Brand className="gym-name mx-4" as={Link} to="/">
            Fit N Fine Gym
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mx-1 ">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
              <Link className="nav-link text-light" to="/about">
                About us
              </Link>
              <Link className="nav-link text-light" to="/Contactus">
                Contact us
              </Link>
              <Link className="nav-link text-light" to="/login">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          <div style={{width:'100%'}} className="loginlogo d-flex  col-lg-4">
  <img style={{width:"15%"}} className="pt-3 mx-auto " src="assets/gymlogo.png" alt="" />
          </div>
  <div className="row g-0 justify-content-center mt-4">
    <div className="col-8 col-lg-7  col-md-8 col-sm-8">
      <div className="card shadow">
        <div className="card-title text-center border-bottom">
          <h2 className="p-1">Login</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="mb-2">
              <label for="username" className="form-label">Username/Email</label>
              <input type="text" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" />
            </div>
            <div className="mb-2">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label for="remember" className="form-label">Remember Me</label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn text-light bg-dark">Login</button>
              <Link to={"/register"}>Not register Click here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
