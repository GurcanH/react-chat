import React from "react";
import { Label } from 'semantic-ui-react'


import style from "components/activeUser/ActiveUser.module.css";
import icon from 'assets/images/gurcan.jpg';

const activeUser = (props) =>(
    <div className={style.Div}>
    <Label as='a' color='yellow' image>
      <img src={icon} alt="Icon"/>
      {props.name}
    </Label>
  </div>
)
export default activeUser;
