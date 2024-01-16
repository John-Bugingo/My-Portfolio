import React from "react";
import { useState } from "react";
import { FaLock, FaUser, FaEnvelope } from 'react-icons/fa';
import Navbar from "./Navbar";

export default function LoginComp() {
  const [action, setAction]=useState("Login");
  return (
    <>
      <div className="container1">
       <div className="container2">
       <div className="header1">
          <h1>{action}</h1>
        </div>
        <div className="underline"></div>
        <div className="inputs">
          {action === "Login"?<div></div>:
          <div className="input">
          <FaUser /> 
          <input type="text" placeholder="Name"/>
          </div>}
          
          <div className="input">
          <FaEnvelope /> 
          <input type="text" placeholder="Email"/>
          </div>
          <div className="input">
          <FaLock />
          <input type="password" placeholder="Password"/>
          </div>
        </div>
        {action === "Sign Up"?<div></div>:
        <div className="forgot-password">
        <p>Lost password? <label>Click here</label></p>
      </div>}
        <div className="sign-login">
          <div className={action === "Sign Up"?"submitt":"gray"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action === "Login"?"submitt":"gray"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
       </div>
      </div>
    </>
  );
}
