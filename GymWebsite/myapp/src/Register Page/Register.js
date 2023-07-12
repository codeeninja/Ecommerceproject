import React, { useState } from "react";
import { Navbar, NavDropdown, Nav, Toast } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "react-bootstrap";
export default function Register() {
    const[name,setName]=useState('');
    const[surname,setSurname]=useState('');
    const[number,setnumber]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[cpassword,setcPassword]=useState('');
    const[role,serole]=useState('');
    const navigate=useNavigate();
    const handelsubmit = async (e) => {
      e.preventDefault();
     let valid = true; // Renamed the variable to `valid`
    
      if (name.trim() === "" || name === null) {
        valid = false;
        toast.warning("Please enter name");
      }
      if (surname.trim() === "" || surname === null) {
        valid = false;
        toast.warning("Please enter Surname");
      }
      if (email.trim() === "" || email === null) {
        valid = false;
        toast.warning("Please enter email");
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        valid = false;
        toast.warning("Please enter a valid email address");
      }
      console.log(name, surname, email, number);
    
        const response = await fetch('http://localhost:5000/register', {
          method: 'post',
          body: JSON.stringify({ name, surname, email, password,role: role.toLowerCase(), }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json(); // Renamed the variable to `data`
        console.warn(data);
        alert("register Successfull");
        navigate("/login");
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <h1
              style={{ fontSize: "40px", fontWeight: "bold" }}
              className="text-warning  mt-3"
            >
              Fit N Fine Gym
            </h1>
            <h4
              style={{ fontSize: "30px" }}
              className="text-warning text-center mt-2"
            >
              Register
            </h4>
          </div>
          <div style={{ width: "90%" }} className="card shadow">
            <div className="card-title text-center border-bottom">
              <h1 className="p-1">Register</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handelsubmit}>
                <div className="row">
                <div className="mb-2 col-6">
                  <label for="username" className="form-label">
                 Name
                  </label>
                  <input
                    type="text"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="username"
                  />
                </div>
                <div className="mb-2 col-6">
                  <label for="username" className="form-label">
                 Surname
                  </label>
                  <input
                    type="text"
                    value={surname} 
                    onChange={(e) => setSurname(e.target.value)}
                    className="form-control"
                    id="username"
                  />
                </div>
                <div className="mb-2 col-6">
                  <label for="username" className="form-label">
                 Email
                  </label>
                  <input
                    type="text"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="username"
                  />
                </div>
                <div className="mb-2 col-6">
                  <label for="username" className="form-label">
                  Password
                  </label>
                  <input
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="username"
                  />
                </div>
                <div className="mb-2 col-6">
                <label for="username" className="form-label">
                  Role
                </label>
                <Form.Select
                  value={role}
                  onChange={(e) => serole(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="Client">client</option>
                </Form.Select>
              </div>
            <button style={{width:"30%" ,margin:"auto"}} onClick={handelsubmit} className="btn btn-outline-success d-block mt-2">Sign Up</button>
            </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
