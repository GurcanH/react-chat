import React , { Component } from "react";
import style from "components/info/Info.module.css";

class Info extends Component {
    render() {
        return (
            <div className={style.Div}>
                <div style={{padding: '8px'}}><h3>The Hamaly Chat App</h3></div>
                <div><span>Created by Gurcan Hamali</span></div>
            </div>

        )
    }
}

export default Info;
