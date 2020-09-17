import React, { Component } from "react";
import style from "containers/messages/Messages.module.css";
import { Input, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import * as actions from "store/actions";

class Messages extends Component {


  state = {
    message: "",   
  };

 
  handleChange = (event) => {
    // [event.target.type] would be email or password!!!!
    this.setState({ message: event.target.value });
  };
  submitHandler = () => {
    const obj = {userSendUID:this.props.userSendUID, 
                userReceiveUID:this.props.userReceiveUID,
                message: this.state.message, 
                messageDate: new Date()}
                this.setState({message: ""});
    this.props.SendMessage(obj);
  };

  render() {
    let classes = [style.Div];
    if (!this.props.userSendUID || !this.props.userReceiveUID || !this.props.isAuthenticated){
      classes.push(style.DivNone);
    }

    return (
      <div  className={classes.join(' ')}>
        <Input
          className={style.Input}
          action={{ color: "teal", icon: "add" }}
          actionPosition="left"
          placeholder="Write your message"
          onChange={this.handleChange}
          value={this.state.message}
        />
        <div className={style.ButtonDiv}>
            <Button onClick={this.submitHandler} className={style.Button} color="orange" icon labelPosition="left">
            <Icon name="edit" />
            Add Reply
            </Button>
            <Button  className={style.Button} color="teal" icon labelPosition="right">
            <Icon name="cloud upload" />
            Upload Media
            </Button>
        </div>        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SendMessage: (obj) => dispatch(actions.sendMessage(obj)),
   
  };
};
const mapStateToProps = (state) => {
  return {
    userSendUID: state.chat.userSendUID,
    userReceiveUID: state.chat.userReceiveUID,
    isAuthenticated: state.auth.token !== null,
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Messages);
