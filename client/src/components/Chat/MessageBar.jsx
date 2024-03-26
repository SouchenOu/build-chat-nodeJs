import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { ADD_IMAGE_MESSAGE_ROUTES, CREATE_MESSAGE } from "@/utils/ApiRoutes";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import {ImAttachment} from "react-icons/im"
import { MdSend } from "react-icons/md";
import PhotoUpload from "../usedFiles/PhotoUpload";
// import CaptureAudio from "../usedFiles/CaptureAudio";


/*******Regular Import (import CaptureAudio from "../usedFiles/CaptureAudio";):

With a regular import statement, the referenced module (CaptureAudio in this case) will be imported synchronously at the time the module containing the import statement is parsed. This means that the module will be loaded and executed before the rest of the code in the importing module continues to execute.
This type of import is static, meaning that the module dependency is resolved and loaded during the build time.
Dynamic Import (const captureAudio = dynamic(() => import("../usedFiles/CaptureAudio"), {ssr: false})):

Dynamic imports, as the name suggests, allow you to import modules dynamically at runtime, rather than statically at build time. The dynamic function from Next.js enables this behavior.
The module referenced in the dynamic import ("../usedFiles/CaptureAudio") is loaded asynchronously when the function (dynamic) is called. It will be fetched and executed only when the code reaches that point during runtime.
Dynamic imports are particularly useful for components or modules that are not needed immediately upon page load or that are conditionally loaded based on user interactions or other runtime conditions.
Additionally, in the specific case of Next.js, the {ssr: false} option is provided to specify that this component should not be server-side rendered, indicating that it should only be loaded on the client side. */
import dynamic from "next/dynamic";

const captureAudio = dynamic(() => import("../usedFiles/CaptureAudio"), {ssr: false})

function MessageBar() {
  const [{userInfo, currentChatUser, socket}, dispatch] = useStateProvider();
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setshowEmojiPicker] = useState(false);
  const [grabPhoto, setgrabPhoto] = useState(false);
  const [showAudio, setShowAudio] = useState(false);
  const EmojiRef = useRef(null);

  const photoPickerChange = async (e) =>{
    try{
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      const response = await axios.post(ADD_IMAGE_MESSAGE_ROUTES , formData,{headers : {"Content-Type" : "multipart/form-data"}, params : {fromId : userInfo.id, toId: currentChatUser.id}})
      if(response.status === 201){
        socket.current.emit('send-message',{toId : currentChatUser.id, fromId : userInfo.id, content: response.data.message.content});
        dispatch({type: reducerCases.ADD_MESSAGE, newMessage : {...response.data.message}, fromSelf : true});
      }
    }catch(err){

    }
  }

  useEffect(()=>{

    const handleOutsideClick = (event) =>{
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

  }
  const sendMessage = async () =>{
    try{
      const {data} = await axios.post(CREATE_MESSAGE, {toId : currentChatUser.id, fromId: userInfo.id, content : message});
      socket.current.emit("send-message", {toId : currentChatUser.id, fromId: userInfo.id, content : data.message});
      dispatch({type: reducerCases.ADD_MESSAGE, newMessage: {...data.message}, fromSelf : true});
      setMessage("");
      
    }catch(err){

    }

  }

  useEffect(()=>{
    if(grabPhoto){
      const data = document.getElementById("photo-picker") ;
      data.click();
      document.body.onfocus = (e) =>{
        setgrabPhoto(false);
      }
      
    }
  }, [grabPhoto])
  return <div className="h-20 bg-panel-header-background flex items-center justify-center gap-6  px-4 relative ">
    {!showAudio && <>
            <div className="flex gap-8">
              <BsEmojiSmile id="open-emoji" onClick={handleEmoji}className="text-panel-header-icon cursor-pointer text-xl" title="Emoji"/>
                {showEmojiPicker && <div ref={EmojiRef} className=" absolute bottom-24 left-16 z-index"><EmojiPicker onEmojiClick={handleEmojiClick} theme="dark"/></div>}
              <ImAttachment onClick={()=> setgrabPhoto(true)} className="text-panel-header-icon cursor-pointer text-xl" title="Attach file"/>
            </div>
            <div className="h-10 w-full rounded-lg flex items-center">
                <input value={message} type="text" placeholder="Type a message " onChange={(e)=>setMessage(e.target.value)} className="bg-input-background text-sm text-white h-10 w-full py-3 px-5 focus:outline-none rounded-lg"/>
            </div>
            <div className="flex w-10 items-center justify-center">
                <button className="flex text-panel-header-icon px-4 py-1 gap-3 " > 
                  {message.length ?  <MdSend style={{ background: 'linear-gradient(to bottom, #C72C41, #801336)' }}  onClick={()=>sendMessage()} className=" rounded-lg p-1 text-panel-header-icon cursor-pointer text-4xl" title="Send message"/> :            
                  <FaMicrophone onClick={ ()=> setShowAudio(true)} style={{ background: 'linear-gradient(to bottom, #C72C41, #801336)' }} className="text-panel-header-icon cursor-pointer text-4xl p-1 " title="Send  record"/>
      }
                </button>
            </div>
    </>}
      
      {grabPhoto && <PhotoUpload onChange={photoPickerChange}/>}
      {showAudio && <CaptureAudio hide={setShowAudio} />}

   
  </div>;
}

export default MessageBar;
