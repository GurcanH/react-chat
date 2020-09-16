import React, { Component } from "react";
import style from "components/login/Login.module.css";

class Login extends Component {
  render() {
    return (
      <form>
        <div className={style.Container}>
          <label className={style.Label} for="uname">
            <b>Username</b>
          </label>
          <input className={style.Input} type="text" placeholder="Enter Username" name="uname" />

          <label className={style.Label} for="psw">
            <b>Password</b>
          </label>
          <input className={style.Input}  type="password" placeholder="Enter Password" name="psw" />

          <button className={style.Button} type="submit">Login</button>
          <label className={style.Label}>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
          <p></p>
          <div className={style.center}>
            <label className={style.Label}>Not a member? <a className={style.SignUpNow} href="/">Sign up now</a></label>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
