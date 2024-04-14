import React, { useEffect, useRef, useState } from "react";

import ConversationPanel from "./ConversationPanel";
import SideBar from "./Chatlist/SideBar";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios, { Axios } from "axios";
import { GET_MESSAGES, HOST, check_user_Route } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import Chat from "./Chat/Chat";
import { io } from "socket.io-client";
import SearchMessages from "./Chat/SearchMessages";
import VideoCall from "./Call/VideoCall";
import VoiceCall from "./Call/VoiceCall";
import IncomingVideoCall from "./usedFiles/IncomingVideoCall";
import IncomingCall from "./usedFiles/IncomingCall";

function Main() {
  const router = useRouter();
  const [{userInfo, currentChatUser, messages, messageSearch, videoCall, voiceCall, incomingVideoCall, incomingVoiceCall}, dispatch] = useStateProvider();
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [socketEvent, setSocketEvent] = useState(false);
  const socket = useRef()
  useEffect(()=>{
    if(redirectLogin)
      router.push("/login");
  },[redirectLogin]);


  onAuthStateChanged(firebaseAuth, async(currentUser)=>{
    if(!currentUser){
      setRedirectLogin(true);

    }
    if(!userInfo && currentUser?.email){
      const { data } = await axios.post(check_user_Route, {email : currentUser.email});

      if(!data.status)
      {
        router.push("/login");
      }
      if(data.data){
        const {id ,name, email, profilePicture: profileImage, status} = data.data;
        dispatch({type:reducerCases.SET_USER_INFO, userInfo: {id, name, email, profileImage, status}});
      }
        
    }
   

  });
// this useEffect will run when the userInfo changed
  useEffect(()=>{
      if(userInfo){

        /****socket.current = io(HOST);: This line initializes a socket connection using the io function from some library, passing in the HOST variable as a parameter. It seems that socket is a ref to a socket object. */
        socket.current = io(HOST);
        socket.current.emit("add-user", userInfo.id);
        dispatch({type: reducerCases.SET_SOCKET, socket});
      }
  },[userInfo]);

  useEffect(()=>{
    if(socket.current && !socketEvent){
      socket.current.on("message-receive", (data)=>{
       
        dispatch({type: reducerCases.ADD_MESSAGE, newMessage:{...data.message}}) 
      });

      socket.current.on("incoming-voice-call",({from,roomId, callType})=>{
        dispatch({type: reducerCases.SET_INCOMING_VOICE_CALL, incomingVoiceCall: {...from,roomId, callType}})
        console.log("incoming voice in main-->", incomingVoiceCall);

      });

      socket.current.on("incoming-video-call",({from,roomId, callType})=>{
        dispatch({type: reducerCases.SET_INCOMING_VIDEO_CALL, incomingVideoCall: {...from,roomId, callType}})

      });
      console.log("incoming here-->", incomingVoiceCall);
      socket.current.on("voice-call-rejected", ()=>{
        dispatch({type : reducerCases.END_CALL})
      })

      socket.current.on("video-call-rejected", ()=>{
        dispatch({type : reducerCases.END_CALL})
      })
      setSocketEvent(true);
    }
  },[socket.current])

  useEffect(()=>{
    
    const getMessage = async() =>{
      const {data : {messages}} = await axios.get(`${GET_MESSAGES}/${userInfo.id}/${currentChatUser.id}`);
      dispatch({type:reducerCases.SET_MESSAGES, messages})
     
    }
    if(currentChatUser?.id && userInfo?.id)
    {
      getMessage();
    }
  },[currentChatUser]);

  console.log("videoCall-->", videoCall);

  return <div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden">
    {incomingVideoCall && <IncomingVideoCall/>}
    {incomingVoiceCall && <IncomingCall/>}
    {videoCall && (<div className="h-screen w-screen max-h-full overflow-hidden"><VideoCall/></div>)}
    {voiceCall && (<div className="h-screen w-screen max-h-full overflow-hidden"><VoiceCall/></div>)}
    <SideBar/>
    {currentChatUser ? 
    <div className={messageSearch ? 'grid grid-cols-2' : ''}> <Chat /> {messageSearch && <SearchMessages/>} </div>: <ConversationPanel/>}
  </div>
}

export default Main;
