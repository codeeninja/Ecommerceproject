import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Contactus() {
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
      <section className="container mt-5">
        <div className="row">
          <div className="col-sm-12 text-center mb-4">
            <a
              className="btn btn-primary"
              target="_blank"
              href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f8876459b9ac2&mfid=1619175810225_f8876459b9ac2#/checkout/openButton"
            >
              {" "}
              Donate Now <i className="fa fa-dollar"></i>
            </a>
          </div>

          <div className="col-sm-12 mb-4 col-md-5">
            <div className="card border-primary rounded-0">
              <div className="card-header p-0">
                <div className="bg-primary text-white text-center py-2">
                  <h3>
                    <i className="fa fa-envelope"></i> Write to us:
                  </h3>
                  <p className="m-0">
                    We’ll write rarely, but only the best content.
                  </p>
                </div>
              </div>
              <div className="card-body p-3">
                <div className="form-group">
                  <label> Your name </label>
                  <div className="input-group">
                    <input
                      value=""
                      type="text"
                      name="data[name]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Your email</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="email"
                      value=""
                      name="data[email]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      name="data[subject]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input type="text" className="form-control" name="mesg" />
                  </div>
                </div>
                <div className="text-center">
                  <input
                    type="submit"
                    name="submit"
                    value="submit"
                    className="btn btn-primary btn-block rounded-0 py-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-7">
            <div className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117223.77996815204!2d85.3213263!3d23.3432048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11b5a9b0042eef56!2sourcita.com!5e0!3m2!1sen!2sin!4v1589706571407!5m2!1sen!2sin"
                width="100%"
                height="450"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
