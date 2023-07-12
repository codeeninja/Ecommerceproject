import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

export default function Clientdetail() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("http://localhost:5000/getclient");
          response.ok
            ? setData(await response.json())
            : console.error("Error fetching gym data");
            console.log("Data"+data)
        };
        fetchData();
      }, []);
      const handelclick =async (id) => {
        console.log(id);
        const deleteuser=await fetch(`http://localhost:5000/delete/${id}`,{
          method:"DELETE"
        });
        // const result=await deleteuser.json();
        if (deleteuser.ok) {
          // alert("User Deleted");
          window.location.reload();
        } else {
          alert("Something went wrong");
        }
      };
  
      const handelLogout=(()=>{
        localStorage.getItem('user');
        // navigate('/login')
        localStorage.clear();
      })
  return (
    <>
      <div>
        <Navbar className="btn-3" bg="dark" expand="lg">
          <Navbar.Brand className="gym-name mx-4" as={Link} to="/">
            Fit N Fine Gym
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:'white'}} />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto mx-1 ">
              <Link className="nav-link text-light" to="/Adduser ">
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
      <div className="col-10 col-sm-10 col-md-11 col-lg-11 mx-auto">
  <div className="table-responsive">
    <h1 className="text-center text-white m-4">Client Detail</h1>
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
                onClick={() => handelclick(detail.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </>
  );
}
