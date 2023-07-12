import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="main-screen">
      <Navbar className="btn-3" bg="dark" expand="lg">
        <Navbar.Brand className="gym-name mx-4" as={Link} to="/">
          Shivam
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mx-1 ">
            <Link className="nav-link text-light" to="/">
              Home
            </Link>
            <Link className="nav-link text-light" to="/about">
              Products
            </Link>
            <Link className="nav-link text-light" to="/Contactus">
              Track Order
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1 className="p-2 text-white">Hlo profile</h1>
      <div className="container">
        <div className="row">
          <div className="mt-3 m-auto col-12 col-sm-10 col-md-10 col-lg-6">
            <div className="card bg-dark text-white">
                <img className="col-4 col-sm-4 col-lg-3 col-md-4 p-2 m-auto" src="assets/men.png" alt="" />
              <div className="card-body">
                <h3 className="card-title text-center">MemberShip Detail</h3>
                <h4 className="card-title">3 Month</h4>
                <h6 className="card-subtitle mb-2">Price:- 2800</h6>
                <p className="card-text">Start-Date:-11-05-2023</p>
                <p className="card-text">End-Date:-11-08-2023</p>
              </div>
            </div>
          </div>
        </div>
          <div className="mt-3 m-auto col-12 col-sm-10 col-md-10 col-lg-6 mb-3">
            <div className="card bg-dark text-white">
                {/* <img className="col-4 col-sm-4 col-lg-3 col-md-4 p-2 m-auto" src="assets/men.png" alt="" /> */}
              <div className="card-body">
                <h3 className="card-title text-center">Personal Detail</h3>
                <h6 className="card-text">Name:Shivam Kale</h6>
                <h6 className="card-text mb-2">Email:- shivamkale1123@gmail.com</h6>
                <h6 className="card-text">Username:-shivam23</h6>
                <h className="card-text">GymId:-23112001</h>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
