import React from "react";
import Navbar from "./Navbar";

export default function LoginComp() {
  return (
    <>
    <div className="container1">
    <div className="container">
        <form>
          <h1>Login</h1>
          <div className="loginFoam">
            <tr>
              <td>Username:</td>
              <td>
                <input type="text" placeholder="enter username" required />
              </td>
            </tr>
            <tr>
            <td>Password:</td>
              <td>
                <input type="password" placeholder="password" required></input>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Remember me</td>
            </tr>
            <tr>
              <a href="/" className="forgot">Forgot password</a>
            </tr>
            <tr className="login-off">
              <td className="login">
                <input type="button" value="Login" />
              </td>
                <td className="logoff">
                  < input type="button" value="Sign Up"/>
                </td>
              </tr>
          </div>
        </form>
      </div>
    </div>

    </>
  );
}
