import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "./Adduser.css";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { differenceInDays } from "date-fns";

export default function AddUser() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [email, setEmail] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [address, setaddress] = useState("");
  const [plan, setplan] = useState("");
  const [age, setage] = useState("");
  const [numofdays, setNumOfDays] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const diffDays = calculateDateDifference(); // Calculate date difference
    setNumOfDays(diffDays);
    console.log(
      name,
      surname,
      selectedEmail,
      location,
      phoneno,
      age,
      address,
      plan,
      numofdays
      );
      const response = await fetch("http://localhost:5000/clientDetail", {
        method: "post",
        body: JSON.stringify({
          name,
          surname,
          email: selectedEmail,
          location,
          phoneno,
          age,
          address,
          plan,
          numofdays: diffDays,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      alert("User Added Successfully");
      window.location.reload();
    } else {
      console.error("Something went wrong");
    }
  };

  const calculateDateDifference = () => {
    const startDateObj = new Date(startdate);
    const endDateObj = new Date(enddate);
    const diffDays = differenceInDays(endDateObj, startDateObj);
    return diffDays;
  };
  console.log(calculateDateDifference())
  const handelLogout = () => {
    localStorage.getItem("user");
    // navigate('/login')
    localStorage.clear();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/getmail");
      if (response.ok) {
        const data = await response.json();
        setEmail(data);
      } else {
        console.error("Error fetching Email");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar className="btn-3" bg="dark" expand="lg">
          <Navbar.Brand className="gym-name mx-4" as={Link} to="/">
            Fit N Fine Gym
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mx-1 ">
              <Link className="nav-link text-light" to="/Adduser">
                Add Member
              </Link>
              <Link className="nav-link text-light" to="/getclient">
                View Member
              </Link>
              <Link className="nav-link text-light" to="/updatedetail">
                Update Detail
              </Link>
              <Link
                onClick={handelLogout}
                className="nav-link text-light"
                to="/login"
              >
                Logout
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div style={{ width: "90%" }} className="card shadow mx-auto mt-5">
        <div className="card-title text-center border-bottom">
          <h1 className="p-1">Add Member</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-2 col-6">
                <label htmlFor="username" className="form-label">
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
                <label htmlFor="surname" className="form-label">
                  Surname
                </label>
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="form-control"
                  id="surname"
                />
              </div>
              <div className="mb-2 col-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Form.Select
                  value={selectedEmail}
                  onChange={(e) => setSelectedEmail(e.target.value)}
                >
                  <option value="">Select an option</option>
                  {Array.isArray(email) &&
                    email.map((emaildata) => (
                      <option key={emaildata.email} value={emaildata.email}>
                        {emaildata.email}
                      </option>
                    ))}
                </Form.Select>
              </div>
              <div className="mb-2 col-6">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-control"
                  id="location"
                />
              </div>
              <div className="mb-2 col-6">
                <label htmlFor="phoneno" className="form-label">
                  Phone-No
                </label>
                <input
                  type="text"
                  value={phoneno}
                  onChange={(e) => setphoneno(e.target.value)}
                  className="form-control"
                  id="phoneno"
                />
              </div>
              <div className="mb-2 col-6">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setage(e.target.value)}
                  className="form-control"
                  id="age"
                />
              </div>
              <div className="mb-2 col-6">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  className="form-control"
                  id="address"
                />
              </div>
              <div className="mb-2 col-6">
                <label htmlFor="plan" className="form-label">
                  Subscription
                </label>
                <Form.Select
                  value={plan}
                  onChange={(e) => setplan(e.target.value)}
                >
                  <option value="">Select an option</option>
                  <option value="700:-1 Month">700:-1 Month</option>
                  <option value="1800:-3 Month">1800:-3 Month</option>
                  <option value="3800:-6 Month">3800:-6 Month</option>
                  <option value="8800:-1 Year">8800:-1 Year</option>
                </Form.Select>
              </div>
              <div className="mb-2 col-6">
                <label htmlFor="startdate" className="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startdate}
                  onChange={(e) => setstartdate(e.target.value)}
                  className="form-control"
                  id="startdate"
                />
              </div>
              <div className="mb-2 col-6">
                <label htmlFor="enddate" className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  value={enddate}
                  onChange={(e) => setenddate(e.target.value)}
                  className="form-control"
                  id="enddate"
                />
              </div>
              <p>Date Difference: {calculateDateDifference()} days</p>
              <div className="col-12 text-center mt-3">
                <button className="btn btn-outline-success" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
