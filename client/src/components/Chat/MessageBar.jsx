import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import {ImAttachment} from "react-icons/im"
import { MdSend } from "react-icons/md";

function MessageBar() {
  return <div className="h-20 bg-panel-header-background flex items-center justify-center gap-6  px-4 relative ">
      <div className="flex gap-8">
        <BsEmojiSmile className="text-panel-header-icon cursor-pointer text-xl" title="Emogi"/>
        <ImAttachment className="text-panel-header-icon cursor-pointer text-xl" title="Attach file"/>
      </div>
      <div className="h-10 w-full rounded-lg flex items-center">
          <input type="text" placeholder="Type a message " className="bg-input-background text-sm text-white h-10 w-full py-3 px-5 focus:outline-none rounded-lg"/>
      </div>
      <div className="flex w-10 items-center justify-center">
          <button className="flex text-panel-header-icon px-3 py-1 gap-3" style={{ background: 'linear-gradient(to bottom, #C72C41, #801336)' }} > 
            <MdSend className="text-panel-header-icon cursor-pointer text-xl" title="Send message"/> 
            <FaMicrophone className="text-panel-header-icon cursor-pointer text-xl" title="Send  record"/>
          </button>
      </div>


   
  </div>;
}

export default MessageBar;
