import { useStateProvider } from "@/context/StateContext";
import { calculateTime } from "@/utils/CalculateTime";
import Image from "next/image";
import React from "react";
import MessageStatus from "../usedFiles/MessageStatus";
import { HOST } from "@/utils/ApiRoutes";

function ChatContainer() {
  const [{messages, userInfo, currentChatUser}] = useStateProvider();



  return <div className="h-[80vh]  relative overflow-auto flex-grow custom-scrollbar">
      <div className="mx-5 my-3">
        <div className="flex flex-col justify-end w-full gap-1 ">
              {
                messages && messages.map((message, index)=>(
                    <div key={message.id} className={` flex gap-3 ${message.senderId === currentChatUser.id  ? "justify-start"  : "justify-end"}`}>
                      {message.type === 'text' && (

                        <div className={`text-white px-3 py-3 text-sm rounded-md gap-2 flex items-end max-w-[45%] ${message.senderId === currentChatUser.id ? 'bg-incoming-background' : 'bg-incoming-background'}`} style={message.senderId !== currentChatUser.id ? { background: 'linear-gradient(to bottom, #661f29, #4e091f)' } : null}>
                            <Image className="rounded-full" src={message.sender.profilePicture} width={50} height={30}/>
                          <span className="break-all">{message.content}</span>
                          <div className="flex flex-col">
                            <span className="text-bubble-meta text-[11px] pt-4 min-w-fit">{calculateTime(message.createdAt)}</span>
                            <span className="">{message.senderId === userInfo.id &&  <MessageStatus MessageStatus={message.messageStatus}/>}</span>
                          </div>
                        </div>
                      )}
                      {message.type === 'image' && 
                      <div className={` px-3 py-3 rounded-lg ${message.senderId === currentChatUser.id ? 'bg-incoming-background' : ''} `} style={message.senderId !== currentChatUser.id ? { background: 'linear-gradient(to bottom, #661f29, #4e091f)' } : null}>
                          {/* <Image className="rounded-full" src={message.sender.profilePicture} width={50} height={30}/> */}
                        <div className="relative">
                          <Image className="rounded-lg" src={`${HOST}/${message.content}`} width={300} height={300}/>
                          <div className="absolute bottom-1 right-1 flex items-1 gap-2">
                            <span className="text-bubble-meta text-[11px] pt-2 min-w-fit">{calculateTime(message.createdAt)}</span>
                            <span>{message.senderId === userInfo.id && <messageStatus MessageStatus={message.messageStatus}/>}</span>
                          </div>
                        </div>
                        </div>}

                    </div>
                  ))
              }
        </div>
         
    </div>
    

   
    </div>;
}

export default ChatContainer;
