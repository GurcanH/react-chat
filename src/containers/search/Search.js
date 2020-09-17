import React, { Component } from "react";
import style from "containers/search/Search.module.css";
import { Input, Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";

import image1 from "assets/images/1.jpg";
import image2 from "assets/images/2.jpg";
import image3 from "assets/images/3.jpg";

const images = [image1, image2, image3];
const rndNumber = Math.floor(Math.random() * 3);
const image = images[rndNumber];

class Search extends Component {
  render() {
    return (
      <div className={this.props.receiverFullName && this.props.isAuthenticated ? '' : style.DivNone}>
        <div className={style.SearchDiv}>
          <Input
            icon={{ name: "search", circular: true, link: true }}
            placeholder="Search Messages"
          />
        </div>
        <div className={style.UserDiv}>
          <Label as="a" color="pink" image>
            <img src={image} alt="Icon" />
            {this.props.receiverFullName}
          </Label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    receiverFullName: state.chat.receiverFullName
  };
};
export default connect(mapStateToProps)(Search);
