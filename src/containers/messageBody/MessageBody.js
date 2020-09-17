import React, { Component } from "react";
import style from "containers/messageBody/MessageBody.module.css";
import { connect } from "react-redux";
import { List } from 'semantic-ui-react'


class MessageBody extends Component {



    render() {
        let messages = null;
        if (this.props.isAuthenticated && this.props.userFullName) {
            messages = this.props.messages.map((message) => {
                const className = style[message.type];
                const classNameList = style.MessageList;
                const msg = message.data.message;
                const key = message.data.messageDate.seconds.toString() + '-' + message.data.messageDate.nanoseconds.toString()
                return (
                <div  key={key} className={className}>
                    <List.Item className={classNameList}>{msg}</List.Item>
                </div>
                )
                
            });
        }
        return (
            <div className={style.MessageBody}>
                <List>{messages}</List>

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages,
        isAuthenticated: state.auth.token !== null,
        userFullName: state.auth.userFullName,
    };
  };
export default  connect(mapStateToProps)(MessageBody);