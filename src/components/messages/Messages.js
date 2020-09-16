import React, { Component } from "react";
import style from "components/messages/Messages.module.css";
import { Input, Button, Icon } from "semantic-ui-react";

class Messages extends Component {
  render() {
    return (
      <div className={style.Div}>
        <Input
          className={style.Input}
          action={{ color: "teal", icon: "add" }}
          actionPosition="left"
          placeholder="Write your message"
        />
        <div className={style.ButtonDiv}>
            <Button className={style.Button} color="orange" icon labelPosition="left">
            <Icon name="edit" />
            Add Reply
            </Button>
            <Button className={style.Button} color="teal" icon labelPosition="right">
            <Icon name="cloud upload" />
            Upload Media
            </Button>
        </div>        
      </div>
    );
  }
}

export default Messages;
