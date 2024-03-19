import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { CREATE_MESSAGE } from "@/utils/ApiRoutes";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import {ImAttachment} from "react-icons/im"
import { MdSend } from "react-icons/md";

function MessageBar() {
  const [{userInfo, currentChatUser, socket}, dispatch] = useStateProvider();
  console.log("socket here-->", socket);
  const [message, setMessage] = useState("");
  const [ showEmojiPicker, setshowEmojiPicker] = useState(false);
  const EmojiRef = useRef(null);


  useEffect(()=>{

    const handleOutsideClick = (event) =>{
      console.log("target here-->", event.target.id);
      if(event.target.id !== "open-emoji"){
        if(EmojiRef.current  && !EmojiRef.current.contains(event.target)){
          setshowEmojiPicker(false);
        }

      }

    }

    document.addEventListener("click", handleOutsideClick);
    return ()=>{
      document.removeEventListener("click", handleOutsideClick);
    }

  },[])
  const handleEmoji = () =>{
    setshowEmojiPicker(!showEmojiPicker);
  }
  const handleEmojiClick = (emoji) =>{
    setMessage((prevMessage)=>(prevMessage += emoji.emoji));
    console.log("message hna-->", message);

  }
  const sendMessage = async () =>{
    alert("hello message");
    try{
      const {data} = await axios.post(CREATE_MESSAGE, {toId : currentChatUser.id, fromId: userInfo.id, content : message});
      socket.current.emit("send-message", {toId : currentChatUser.id, fromId: userInfo.id, content : data.message});
      dispatch({type: reducerCases.ADD_MESSAGE, newMessage: {...data.message}, fromSelf : true});
      
    }catch(err){

    }

  }
  return <div className="h-20 bg-panel-header-background flex items-center justify-center gap-6  px-4 relative ">
      <div className="flex gap-8">
        <BsEmojiSmile id="open-emoji" onClick={handleEmoji}className="text-panel-header-icon cursor-pointer text-xl" title="Emoji"/>
          {showEmojiPicker && <div ref={EmojiRef} className=" absolute bottom-24 left-16 z-index"><EmojiPicker onEmojiClick={handleEmojiClick} theme="dark"/></div>}
        <ImAttachment className="text-panel-header-icon cursor-pointer text-xl" title="Attach file"/>
      </div>
      <div className="h-10 w-full rounded-lg flex items-center">
          <input value={message} type="text" placeholder="Type a message " onChange={(e)=>setMessage(e.target.value)} className="bg-input-background text-sm text-white h-10 w-full py-3 px-5 focus:outline-none rounded-lg"/>
      </div>
      <div className="flex w-10 items-center justify-center">
          <button className="flex text-panel-header-icon px-3 py-1 gap-3" style={{ background: 'linear-gradient(to bottom, #C72C41, #801336)' }} > 
            <MdSend onClick={()=>sendMessage()} className="text-panel-header-icon cursor-pointer text-xl" title="Send message"/> 
            <FaMicrophone className="text-panel-header-icon cursor-pointer text-xl" title="Send  record"/>
          </button>
      </div>


   
  </div>;
}

export default MessageBar;
