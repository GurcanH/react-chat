import React, { Component } from "react";
import style from "containers/login/Login.module.css";
import { connect } from 'react-redux';

import * as actions from 'store/actions';
import ActiveUser from "components/activeUser/ActiveUser";

class Login extends Component {

  state = {
    email: "",
    password: ""
  };

  handleChange = (event) => {

    // [event.target.type] would be email or password!!!!
    this.setState({ [event.target.type]: event.target.value });

  };  
  
  submitHandler = ( event ) => {
    event.preventDefault();
    this.props.Login( this.state.email, this.state.password );
  }
  userName = () => {
    return this.state.email.substr(0, this.state.email.indexOf('@'))
  }


  render() {
    let form = <ActiveUser name={this.userName()} />;

    if (!this.props.isAuthenticated){
       form  = (<form onSubmit={this.submitHandler}>
        <div className={style.Container}>
          <label className={style.Label}>
            <b>Email</b>
          </label>
          <input onChange={this.handleChange} className={style.Input} value={this.state.email.value} type="email" placeholder="Enter Email" />

          <label className={style.Label}>
            <b>Password</b>
          </label>
          <input onChange={this.handleChange} className={style.Input}  value={this.state.password.value} type="password" placeholder="Enter Password" />

          <button className={style.Button} type="submit">Login</button>
          <label className={style.Label}>
            <input type="checkbox" checked="checked" readOnly name="remember" /> Remember
            me
          </label>
          <p></p>
          <div className={style.center}>
            <label className={style.Label}>Not a member? <a className={style.SignUpNow} href="/">Sign up now</a></label>
          </div>
        </div>
      </form>)
    }
    return (
      <div>
      {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      loading: state.auth.loading,
      error: state.auth.error,
      isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      Login: ( email, password ) => dispatch( actions.login( email, password ) ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
