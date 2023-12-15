import React from "react";
import "../css/style.css";
import Navbar from "./Navbar";
const HomeComp = () => {
  return (
    <>
      <div className="div0">
        <div className="div1">
          <Navbar />
          <table>
            <tr></tr>
          </table>
        </div>
        <div className="div2">
          <button className="humburger is-active">
            <div className="bar"></div>
          </button>
        </div>
      </div>
    </>
  );
};
export default HomeComp;
