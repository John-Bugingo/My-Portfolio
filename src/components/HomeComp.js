import React from "react";
import "../css/style.css";
import Navbar from "./Navbar";
const HomeComp = () => {
  return (
    <>
      <div className="div0">
        <div className="div1">
          <Navbar />
          <div className="heading1">
          <h1>Welcome to Home page</h1>
          <h2>If you have an account here you can login and you continue</h2>
          </div>
          <div className="table1">
          <table>
            <tr>
              <td>Name: </td>
              <td><input type="text" placeholder="Enter your names" required /></td>
            </tr>
            <tr>
              <td>Tel No:</td>
              <td><input type="number" placeholder="Enter phone number" required/></td>
            </tr>
            <tr>
              <td>Password: </td>
              <td><input type="password" placeholder="input password" required /></td>
            </tr>
          </table>
          </div>
   
        </div>
        <div className="div2">
          <h1>This is the second division.</h1>
          <h2>Here, I will use it to add on some of 
            my links that you can click on in order to find it </h2>

        </div>
      </div>
    </>
  );
};
export default HomeComp;
