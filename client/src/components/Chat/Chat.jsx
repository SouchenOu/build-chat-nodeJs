import React from "react";
import ChatHeader from "./ChatHeader";
import ChatContainer from "./ChatContainer";
import MessageBar from "./MessageBar";

function Chat() {
  return (
    <div className="border-l w-full flex flex-col h-[100vh] relative" style={{
      background: `url('/image-bg.jpg')`
    }}>
      {/* Add an overlay with opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <ChatHeader />
      <ChatContainer />
      <MessageBar />
    </div>
  );
}

export default Chat;
