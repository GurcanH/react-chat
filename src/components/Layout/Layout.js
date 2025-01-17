import React from "react";
import style from "components/Layout/Layout.module.css";

/////////////////////////////////////////////////////////////////
//Layout Modules                                               //
import LeftPanel from "containers/leftPanel/LeftPanel";                    //
import Search from "containers/search/Search";                 //
import MessageBody from "containers/messageBody/MessageBody";  //
import Messages from "containers/messages/Messages";           //
import Info from "components/info/Info";               //
/////////////////////////////////////////////////////////////////


const layout = () => {
  return (
    <div>
      <div className={style.leftpanel}>
        <LeftPanel />
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
