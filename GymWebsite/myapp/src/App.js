import "./App.css";
import Gym from "./Gym";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Aboutus from "./About page/Aboutus";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register Page/Register";
import Contactus from "./ContactUs/Contactus";
import { App as CapacitorApp } from "@capacitor/app";
import { useEffect } from "react";
import Profile from "./Profile/Profile";
import AddUser from "./Adduser/AddUser";
import Clientdetail from "./GetClientDetail/Clientdetail";
import Updatdetail from "./UpdateDetail/Updatdetail";
import Dashboard from "./Dashboard/Dashboard";

function App() {
 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Gym />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Adduser" element={<AddUser />} />
        <Route path="/getclient" element={<Clientdetail />} />
        <Route path="/updatedetail" element={<Updatdetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
