import React from "react";
import Avatar from "../usedFiles/Avatar";
import {MdCall} from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import VoiceCall from "../Call/VoiceCall";

function ChatHeader() {
  const [{currentChatUser}, dispatch] = useStateProvider();

  const handleVoiceCall = () =>{
    dispatch({type : reducerCases.SET_VOICE_CALL, voiceCall :{...currentChatUser, type: "outgoing", callType: "voice", roomId : Date.now()}})
  }
  const handleVideoCall = () =>{
    dispatch({type : reducerCases.SET_VIDEO_CALL, videoCall :{...currentChatUser, type: "outgoing", callType: "video", roomId : Date.now()}})
  }
  return <div className="h-16 bg-black flex justify-between items-center px-3 py-3 z-10" style={{ background: 'linear-gradient(to bottom, #C72C41, #801336)' }}>
            <div className="gap-6 flex items-center justify-center">
              <Avatar type="sm" image={currentChatUser?.profilePicture}/>
              <div className="flex flex-col">
                <span className="text-primary-strong">{currentChatUser?.name}</span>
                <span className="text-secondary text-sm">online/offline</span>
              </div>
            </div>
            <div className="flex gap-6">
                <MdCall onClick={handleVoiceCall} className="text-panel-header-icon cursor-pointer text-xl"/>
                <IoVideocam  onClick={handleVideoCall} className="text-panel-header-icon cursor-pointer text-xl"/>
                <BiSearchAlt2 className="text-panel-header-icon cursor-pointer text-xl" onClick={() => dispatch({type : reducerCases.SET_MESSAGE_SEARCH})}/>
                <BsThreeDotsVertical className="text-panel-header-icon cursor-pointer text-xl"/>
            </div>
  
          </div>
         
}

export default ChatHeader;
