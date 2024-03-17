import { useStateProvider } from "@/context/StateContext";
import React from "react";

function ChatContainer() {
  const [{messages, userInfo, currentChatUser}] = useStateProvider();


  console.log("message container-->", messages);
  console.log("current-->", currentChatUser);

  return <div className="h-[80vh]  relative overflow-auto flex-grow custom-scrollbar">
    <div className=" bg-fixed h-full w-full opacity-12  left-0 top-0 z-10">
      <div className="flex w-full">
        <div className="flex flex-col justify-end w-full gap-1 overflow-auto">
              {
                messages && messages.map((message, index)=>(
                    <div key={message.id} className={`${message.senderId === currentChatUser.id  ? "justify-start"  : "justify-end"}`}>
                      {message.type === 'text' && (
                        <div className={`text-white px-2 Py-6 text-sm rounded-md gap-2  flex  items-end max-w-[45%] ${message.senderId === currentChatUser.id ? 'bg-incoming-background' : 'bg-outgoing-background'}`}>{message.content}</div>
                      )}

                    </div>
                  ))
              }
        </div>
         
      </div>
    </div>
    

   
    </div>;
}

export default ChatContainer;
