import React from "react";
import style from "containers/Layout/Layout.module.css";

/////////////////////////////////////////////////////////////////
//Layout Modules                                               //
import Login from "components/login/Login";                    //
import Search from "components/search/Search";                 //
import MessageBody from "components/messageBody/MessageBody";  //
import Messages from "components/messages/Messages";           //
import Info from "components/info/Info";               //
/////////////////////////////////////////////////////////////////


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
      <div className={style.inputpanel}>
        <Messages />
      </div>
      <div className={style.rightpanel}>
        <Info />
      </div>
    </div>
  );
};

export default layout;
