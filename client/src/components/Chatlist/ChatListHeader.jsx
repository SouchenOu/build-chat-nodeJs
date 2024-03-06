import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React from "react";
import Avatar from "../usedFiles/Avatar";

function ChatListHeader() {
  const [{userInfo}] = useStateProvider();
  console.log("userInfo here-->", userInfo);
  return <div className="">
    <Avatar type="sm" image={userInfo?.profileImage}/>
    
  </div>;
}

export default ChatListHeader;
