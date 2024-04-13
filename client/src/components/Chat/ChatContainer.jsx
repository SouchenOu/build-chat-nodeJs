import { useStateProvider } from "@/context/StateContext";
import { calculateTime } from "@/utils/CalculateTime";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import MessageStatus from "../usedFiles/MessageStatus";
import { HOST } from "@/utils/ApiRoutes";
import VoiceMessage from "./VoiceMessage";
import dynamic from "next/dynamic";
import ImageMessage from "./ImageMessage";


// const VoiceMessage = dynamic(()=> import("./VoiceMessage"), {ssr : false})

function ChatContainer() {
  const [{messages, userInfo, currentChatUser}] = useStateProvider();
  const [forceUpdate, setForceUpdate] = useState(false); // State to force update


  const chatContainerRef = useRef(null);

  useEffect(() => {
    
    // Scroll to the bottom of the chat container when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    // Update forceUpdate state whenever messages change
    setForceUpdate(prevState => !prevState);
  }, [messages]);



  return <div className="h-[80vh]  relative overflow-auto flex-grow custom-scrollbar" ref={chatContainerRef}>
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
                            <span className="">{message.senderId === userInfo.id &&  <MessageStatus MessageStatus={message.messageStatus} content={message.content}/>}</span>
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
                      </div>
                      }
                        
                        {
                          message.type === 'audio' && <VoiceMessage message={message}/>
                          

                        }

                    </div>
                  ))
              }
        </div>
         
    </div>
    

   
    </div>;
}

export default ChatContainer;
