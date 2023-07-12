import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "./About.css";
import Footer from "../Footer/Footer";
import BmiCalculator from "../BMI CALCULATOR/BmiCalculator";
export default function Aboutus() {
  return (
    <div className="main-screen">
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
      <div className="row g-0">
        <div className="col-12 col-sm-12 col-md-12 text-center pt-2">
          <img
            style={{ minWidth: "99%", maxHeight: "380px" }}
            src="assets/gym2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row g-0">
        <h1 className="text-center text-white">About us</h1>
        <div className="col-10 col-md-6 col-sm-8 col-lg-6 mx-auto aboutDiscription pt-2" style={{marginLeft:"1%"}}>
          <h3
            className="text-white col-11 col-md-10 col-sm-10 col-lg-6 mx-auto mt-2"
            style={{ fontSize: "15px" }}
          >
            Our gym was established in 2019 with the aim of helping people
            improve their physical health and wellbeing. We believe that
            everyone deserves the opportunity to live a healthy and active
            lifestyle, and we are committed to providing a welcoming and
            inclusive environment for people of all ages and fitness levels. At
            our gym, we believe that fitness is about more than just physical
            health – it's about feeling good, both inside and out. That's why we
            also offer nutritional counseling and support to help you develop
            healthy eating habits and achieve a balanced lifestyle.
          </h3>
        </div>
        <div className="col-10 col-sm-8 col-md-6 mt-2 col-lg-5 mx-auto">
          <img
            style={{ maxWidth:"100%",maxHeight:"88%" }}
            src="assets/gymaboutsection.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row g-0">
        <h5 className="text-center text-white pt-2">JOIN US NOW</h5>
        <div className="joinusDiscription text-center text-white pb-2 bold">
          <h2>
            JOIN US OUR FREE WORKOUT TRAINING <br />
            WITH FIT N FINE GYM
          </h2>
        </div>
        {/* <div className="col">hi</div>
        <div className="col">hi2</div>
        <div className="col">hi3</div> */}
      </div>
      <div className="row bg-dark mt-4 g-0 text-white">
        <BmiCalculator />
      </div>
      <div className="footer mt-4">
        <Footer />
      </div>
    </div>
  );
}
