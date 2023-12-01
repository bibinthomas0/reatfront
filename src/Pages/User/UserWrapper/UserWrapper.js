import React from "react";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { Route,Routes } from "react-router-dom";
import LoginNav from "../../../Components/Navbar/LoginNav";
import OtpVerification from "../../InBoth/OtpVerification";
import UNavbar from "../UserNav/UNavbar";
import Interests from "../interfaceUi/Interests";
import HomePage from "../Home/HomePage";


function UserWrapper() {
  return (
    <> 
      <LoginNav />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="register" element={<Register/>}/>
        <Route path="/otp" element={<OtpVerification/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
     
    </>
  )
}

export default UserWrapper;
