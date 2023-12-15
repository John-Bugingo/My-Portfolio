import React from "react";

export default function LoginComp() {
  return (
    <>
      <div className="container">
        <form>
          <h1>Login</h1>
          <div className="loginFoam">
            <tr>
              <td>
                Username:{" "}
                <input type="text" placeholder="enter username" required />
              </td>
            </tr>
            <tr>
              <td>
                Password:{" "}
                <input type="password" placeholder="password" required></input>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
                Remember me
              </td>
            </tr>
            <tr>
              <td>Forgot password</td>
            </tr>
            <tr>
              <td>
                <button input type="button">
                  {" "}
                  Login
                </button>
              </td>
              </tr>
              <tr>
                <td>
                  <button input type="button">
                    Sign Up
                  </button>
                </td>
              </tr>
          </div>
        </form>
      </div>
    </>
  );
}
