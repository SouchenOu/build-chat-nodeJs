import { useStateProvider } from "@/context/StateContext";
import { calculateTime } from "@/utils/CalculateTime";
import Image from "next/image";
import React from "react";
import MessageStatus from "../usedFiles/MessageStatus";

function ChatContainer() {
  const [{messages, userInfo, currentChatUser}] = useStateProvider();


  console.log("message container-->", messages);
  console.log("current-->", currentChatUser);

  return <div className="h-[80vh]  relative overflow-auto flex-grow custom-scrollbar">
      <div className="mx-5 my-3">
        <div className="flex flex-col justify-end w-full gap-1 ">
              {
                messages && messages.map((message, index)=>(
                    <div key={message.id} className={` flex gap-3 ${message.senderId === currentChatUser.id  ? "justify-start"  : "justify-end"}`}>
                      <Image className="rounded-full" src={message.sender.profilePicture} width={60} height={30}/>
                      {message.type === 'text' && (
                        <div className={`text-white px-3 py-3 text-sm rounded-md gap-2 flex items-end max-w-[45%] ${message.senderId === currentChatUser.id ? 'bg-incoming-background' : 'bg-incoming-background'}`} style={message.senderId !== currentChatUser.id ? { background: 'linear-gradient(to bottom, #661f29, #4e091f)' } : null}>
                          <span className="break-all">{message.content}</span>
                          <div className="flex flex-col">
                            <span className="text-bubble-meta text-[11px] pt-4 min-w-fit">{calculateTime(message.createdAt)}</span>
                            <span className="">{message.senderId === userInfo.id &&  <MessageStatus MessageStatus={message.messageStatus}/>}</span>
                          </div>
                        </div>
                      )}

                    </div>
                  ))
              }
        </div>
         
    </div>
    

   
    </div>;
}

export default ChatContainer;
