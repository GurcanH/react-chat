import React from "react";
import style from "containers/Layout/Layout.module.css";
import Login from "components/login/Login";
import Search from "components/search/Search";
import MessageBody from "components/messageBody/MessageBody";

const layout = () => {
  return (
    <div>
      <div className={style.leftpanel}>
        <Login />
      </div>
      <div className={style.searchpanel}>
        <Search />
      </div>
      <div className={style.messagepanel}>
        <MessageBody />
      </div>
      <div className={style.inputpanel}></div>
      <div className={style.rightpanel}></div>
    </div>
  );
};

export default layout;
