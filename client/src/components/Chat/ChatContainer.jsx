import { useStateProvider } from "@/context/StateContext";
import React from "react";

function ChatContainer() {
  const [{messages, userInfo, currentChatUser}] = useStateProvider();


  console.log("message container-->", messages);

  return <div className="h-[80vh]  relative overflow-auto flex-grow custom-scrollbar">
    <div className=" bg-fixed h-full w-full opacity-12  left-0 top-0 z-10">
   
    </div>
    <div className="">
    {
     messages && messages.map((message, index)=>(
        <div key={message.id}>{message.content}</div>
      ))
    }
    </div>

   
    </div>;
}

export default ChatContainer;
