import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, List, Label, Icon } from "semantic-ui-react";

import image1 from "assets/images/1.jpg";
import image2 from "assets/images/2.jpg";
import image3 from "assets/images/3.jpg";

import Signup from "containers/signup/Signup";
import Login from "containers/login/Login";
import ActiveUser from "components/activeUser/ActiveUser";
import Spinner from "components/UI/Spinner/Spinner";
import "containers/leftPanel/leftpanel.css";
import style from "containers/leftPanel/LeftPanel.module.css";
import * as actions from "store/actions";


const images = [image1, image2, image3];

class LeftPanel extends Component {

  submitHandler = () => {
    this.props.Logout();
  }
  handleUserId = (uid) => {
    this.props.SetUserId(uid, this.props.userId);
  }
  render() {
    const userList = this.props.users.map((user) => {
      let image = images[Math.floor(Math.random() * 3)];
      return (
        <List.Item onClick={() => this.handleUserId(user.uid)} key={user.uid  }>
          <Image avatar src={image} />
          <List.Content>
            <List.Header>{user.name + " " + user.surname}</List.Header>
          </List.Content>
        </List.Item>
      );
    });
    let list = (
      <List selection verticalAlign="middle">
        {userList}
      </List>
    );

    let form = null;
    if (this.props.loading) {
      form = <Spinner />;
    } else {
      if (this.props.isAuthenticated) {
        form = (
          <div>
            <div onClick={this.submitHandler} className= {style.DivLogout}>            
              <Label as="a">
                Logout
                <Icon name="delete" />
              </Label>
            </div>
            <ActiveUser name={this.props.userFullName} />

            {list}
          </div>
        );
      } else {
        if (this.props.isSignInMode) {
          form = <Login />;
        } else {
          form = <Signup />;
        }
      }
    }

    return <div>{form}</div>;
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
     
      Logout: () => dispatch(actions.logout()),
      SetUserId: (uid,userId) => dispatch(actions.changeReceiveUID(uid,userId))
    };
  };

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    isSignInMode: state.auth.isSignInMode,
    userFullName: state.auth.userFullName,
    users: state.auth.users,
    userId: state.auth.userId
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(LeftPanel);
