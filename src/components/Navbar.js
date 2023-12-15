import React from "react";
import '../css/navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="/" className="logo">Logo</a>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/Projects">projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
