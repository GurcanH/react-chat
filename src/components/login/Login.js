import React, { Component } from "react";
import style from "components/login/Login.module.css";

class Login extends Component {
  render() {
    return (
      <form>
        <div className={style.container}>
          <label for="uname">
            <b>Username</b>
          </label>
          <input type="text" placeholder="Enter Username" name="uname" />

          <label for="psw">
            <b>Password</b>
          </label>
          <input type="password" placeholder="Enter Password" name="psw" />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
          <p></p>
          <div className={style.center}>
            <label>Not a member? <a className={style.SignUpNow} href="/">Sign up now</a></label>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
