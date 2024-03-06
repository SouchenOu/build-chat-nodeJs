import React from "react";

import ConversationPanel from "./ConversationPanel";
import SideBar from "./Chatlist/SideBar";

function Main() {
  return <div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden">
    <SideBar/>
    <ConversationPanel/>
  </div>
}

export default Main;
