import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Modal from "react-modal";
import { Form } from "react-bootstrap";

export default function Updatdetail() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [address, setAddress] = useState("");
  const [plan, setPlan] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/getclient");
      response.ok
        ? setData(await response.json())
        : console.error("Error fetching gym data");
    };
    fetchData();
  }, []);

  const handleClick = (id) => {
    const clickedUser = data.find((detail) => detail.id === id);
    setSelectedUserId(id);
    setName(clickedUser.name);
    setSurname(clickedUser.surname);
    setEmail(clickedUser.email);
    setLocation(clickedUser.location);
    setPhoneno(clickedUser.phoneno);
    setAddress(clickedUser.address);
    setPlan(clickedUser.plan);
    setAge(clickedUser.age);

    setShowModal(true);
  };

//   const closeModal = () => {
//     setShowModal(false);
//   };

const handleUpdate = async () => {
    const updatedData = {
      name,
      surname,
      email,
      location,
      phoneno,
      address,
      plan,
      age,
    };
  
    const response = await fetch(`http://localhost:5000/update/${selectedUserId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
  
    if (response.ok) {
      alert("Detail updated successfully");
      setShowModal(false);
    } else {
      console.log("Sorry, there was an error updating the detail.");
    }
  };
  

  return (
    <>
      <div>
        <Navbar className="btn-3" bg="dark" expand="lg">
          <Navbar.Brand className="gym-name mx-4" as={Link} to="/">
            Fit N Fine Gym
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ color: "white" }}
          />
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
              <Link className="nav-link text-light" to="/login">
                Logout
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="col-10 col-sm-10 col-md-11 col-lg-11 mx-auto">
        <div className="table-responsive">
          <h1 className="text-center text-white m-4">Update Detail</h1>
          <table className="table table-bordered mt-5 mx-auto">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Email</th>
                <th scope="col">Location</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Address</th>
                <th scope="col">Plan</th>
                <th scope="col">Age</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((detail) => (
                <tr style={{ color: "white" }} key={detail.id}>
                  <td>{detail.name}</td>
                  <td>{detail.surname}</td>
                  <td>{detail.email}</td>
                  <td>{detail.location}</td>
                  <td>{detail.phoneno}</td>
                  <td>{detail.address}</td>
                  <td>{detail.plan}</td>
                  <td>{detail.age}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger m-2"
                      onClick={() => handleClick(detail.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        // onRequestClose={closeModal}
        contentLabel="Update Form"
      >
        <h2>Update Form</h2>
        <div style={{ width: "90%" }} className="card shadow mx-auto mt-5">
          <div className="card-title text-center border-bottom">
            <h1 className="p-1">Update Member</h1>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="mb-2 col-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="name"
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
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="email"
                  />
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
                    onChange={(e) => setPhoneno(e.target.value)}
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
                    onChange={(e) => setAge(e.target.value)}
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
                    onChange={(e) => setAddress(e.target.value)}
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
                    onChange={(e) => setPlan(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="700:-1 Month">700:-1 Month</option>
                    <option value="1800:-3 Month">1800:-3 Month</option>
                    <option value="3800:-6 Month">3800:-6 Month</option>
                    <option value="8800:-1 Year">8800:-1 Year</option>
                  </Form.Select>
                </div>
                <button
                  style={{ width: "30%", margin: "auto" }}
                  className="btn btn-outline-success d-block mt-2"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
