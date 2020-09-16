import React, { Component } from "react";
import style from "containers/search/Search.module.css";
import { Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Search extends Component {
  render() {
    return (
      <div className={style.SearchDiv}>
        <Input
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Search Messages"
        />
      </div>
    );
  }
}

export default Search;
