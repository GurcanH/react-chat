import React from "react";
import { Label } from 'semantic-ui-react'


import style from "components/activeUser/ActiveUser.module.css";
import image1 from 'assets/images/1.jpg';
import image2 from 'assets/images/2.jpg';
import image3 from 'assets/images/3.jpg';


const images = [image1, image2, image3];
const rndNumber = Math.floor(Math.random() * 3);
const image = images[rndNumber]; 

// const icon ='../../assets/images/1.jpg';
const activeUser = (props) =>{

  return(
    <div className={style.Div}>
    <Label as='a' color='yellow' image>
      <img src={image} alt="Icon"/>
      {props.name}
    </Label>   
  </div>
  )
}
export default activeUser;
