import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React from "react";
import Avatar from "../usedFiles/Avatar";
import {BsFillChatLeftTextFill, BsThreeDotsVertical} from "react-icons/bs"

function ChatListHeader() {
  const [{userInfo}] = useStateProvider();
  console.log("userInfo here-->", userInfo);
  return <div className=" h-30 flex justify-between items-center px-3 py-6">
    <div className="cursor-pointer">
      <Avatar type="lg" image={userInfo?.profileImage}/>
      <p className="text-2xl">{userInfo?.name}</p>

    </div>
    
    <div className="flex gap-7">
        <BsFillChatLeftTextFill className="text-panel-header-icon cursor-pointer" title="new-chat"/>
        <BsThreeDotsVertical className="cursor-pointer" title="choose an option"/>
    </div>
    
  </div>;
}

export default ChatListHeader;
