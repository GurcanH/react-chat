import React from "react";
import style from "containers/Layout/Layout.module.css";
import Login from "components/login/Login";

const layout = () => {
  return (
    <div>
      <div className={style.leftpanel}>
        <Login />
      </div>
      <div className={style.searchpanel}></div>
      <div className={style.messagepanel}></div>
      <div className={style.inputpanel}></div>
      <div className={style.rightpanel}></div>
    </div>
  );
};

export default layout;
