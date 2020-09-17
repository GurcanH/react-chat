import React, { Component } from "react";
import style from "containers/login/Login.module.css";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";

import * as actions from "store/actions";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    // [event.target.type] would be email or password!!!!
    this.setState({ [event.target.type]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.Login(this.state.email, this.state.password);
  };
  signupHandler = () => {
    this.props.SignupPrepare();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className={style.Container}>
          <Input
            icon="at"
            iconPosition="left"
            onChange={this.handleChange}
            className={style.Input}
            value={this.state.email}
            type="email"
            placeholder="Enter Email"
          />

          <Input
            icon="key"
            iconPosition="left"          
            onChange={this.handleChange}
            className={style.Input}
            value={this.state.password.value}
            type="password"
            placeholder="Enter Password"
          />

          <button className={style.Button} type="submit">
            Login
          </button>
          <div className={style.center}>
            <label className={style.Label}>
              Not a member?
              <span className={style.SignUpNow} onClick={this.signupHandler}>
                Sign up now
              </span>
            </label>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Login: (email, password) => dispatch(actions.login(email, password)),
    SignupPrepare: () => dispatch(actions.signupPrepare()),
  };
};

export default connect(null, mapDispatchToProps)(Login);
