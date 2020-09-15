import React from "react";
import style from "containers/Layout/Layout.module.css";

const layout = () => {
  return (
    <div>
      <div className={style.leftpanel}></div>
      <div className={style.searchpanel}></div>
      <div className={style.messagepanel}></div>
      <div className={style.inputpanel}></div>
      <div className={style.rightpanel}></div>
    </div>
  );
};

export default layout;
