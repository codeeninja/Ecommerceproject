import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Dashboard() {
  const name = JSON.parse(localStorage.getItem('user'));
  const useremail = name ? name.email : '';

  const [userData, setUserData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/getclient");
      if (response.ok) {
        const data = await response.json();
        const user = data.find((item) => item.email === useremail);
        setUserData(user);
      } else {
        console.error("Error fetching gym data");
      }
    };

    fetchData();
  }, [useremail]);

  const handelclick = () => {
    localStorage.getItem("user");
    localStorage.clear();
  };

 

  return (
    <>
      <h1>{useremail}</h1>
      <Link className='btn btn-outline-success m-2' style={{ float: "right" }} onClick={handelclick} to="/login">Logout</Link>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Plan: {userData.plan}</p>
          <p>Phone Number: {userData.phoneno}</p>
          <p> Numberof days: {userData.numofdays}</p>
          {/* Display other user data here */}
        </div>
      )}
     
    </>
  );
}
