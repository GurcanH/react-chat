import React, { Component } from "react";
import style from "containers/signup/Signup.module.css";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";

import * as actions from "store/actions";

class Signup extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: ""
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.Signup(this.state.name, this.state.surname, this.state.email, this.state.password);
  };
  userName = () => {
    return this.state.email.substr(0, this.state.email.indexOf("@"));
  };
  signinHandler = () => {
    this.props.SigninPrepare();
  };

  render() {
    return(
        <form onSubmit={this.submitHandler}>
          <div className={style.Container}>
            <Input
              icon="tag"
              iconPosition="left"
              name="name"
              onChange={this.handleChange}
              className={style.Input}
              value={this.state.name.value}
              type="text"
              placeholder="Enter Your Name"
            />

            <Input
              icon="tags"
              iconPosition="left"
              name="surname"
              onChange={this.handleChange}
              className={style.Input}
              value={this.state.surname.value}
              type="text"
              placeholder="Enter Your Surname"
            />

            <Input
              icon="at"
              iconPosition="left"
              name="email"
              onChange={this.handleChange}
              className={style.Input}
              value={this.state.email.value}
              type="email"
              placeholder="Enter Email"
            />

            <Input
              icon="key"
              iconPosition="left"
              name="password"
              onChange={this.handleChange}
              className={style.Input}
              value={this.state.password.value}
              type="password"
              placeholder="Enter Password"
            />

            <button className={style.Button} type="submit">
              Signup
            </button>
            <div className={style.center}>
            <label className={style.Label}>
              <span className={style.SignInNow} onClick={this.signinHandler}>
                Back
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
    Signup: (name, surname, email, password) => dispatch(actions.signup(name, surname, email, password)),
    SigninPrepare: () => dispatch(actions.signinPrepare()),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
