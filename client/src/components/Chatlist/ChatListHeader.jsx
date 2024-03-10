import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React from "react";
import Avatar from "../usedFiles/Avatar";
import {BsFillChatLeftTextFill, BsThreeDotsVertical} from "react-icons/bs"
import { reducerCases } from "@/context/constants";

function ChatListHeader() {
  const [{userInfo}, dispatch] = useStateProvider();
  const handleAllContactsPage = () =>{
    dispatch({type: reducerCases.SET_ALL_CONTACTS_PAGE});
  }
  console.log("userInfo here-->", userInfo);
  return <div className=" h-30 flex justify-between items-center px-3 py-6">
    <div className="cursor-pointer">
      <Avatar type="lg" image={userInfo?.profileImage}/>
      <p className="text-2xl">{userInfo?.name}</p>

    </div>
    
    <div className="flex gap-7">
        <BsFillChatLeftTextFill className="text-panel-header-icon cursor-pointer" title="new-chat" onClick={()=>handleAllContactsPage()}/>
        <BsThreeDotsVertical className="cursor-pointer" title="choose an option"/>
    </div>
    
  </div>;
}

export default ChatListHeader;
