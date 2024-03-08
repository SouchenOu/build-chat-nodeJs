import React from "react";
import Avatar from "../usedFiles/Avatar";
import {MdCall} from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

function ChatHeader() {
  return <div className="h-16 bg-black flex justify-between items-center px-3 py-3 z-10" style={{ background: 'linear-gradient(to bottom, #C72C41, #801336)' }}>
            <div className="gap-6 flex items-center justify-center">
              <Avatar type="sm" image={"/profile"}/>
              <div className="flex flex-col">
                <span className="text-primary-strong">ouchen soukaina</span>
                <span className="text-secondary text-sm">online/offline</span>
              </div>
            </div>
            <div className="flex gap-6">
                <MdCall className="text-panel-header-icon cursor-pointer text-xl"/>
                <IoVideocam className="text-panel-header-icon cursor-pointer text-xl"/>
                <BiSearchAlt2 className="text-panel-header-icon cursor-pointer text-xl"/>
                <BsThreeDotsVertical className="text-panel-header-icon cursor-pointer text-xl"/>
            </div>
  
          </div>
         
}

export default ChatHeader;
