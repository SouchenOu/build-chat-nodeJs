import { useStateProvider } from "@/context/StateContext";
import React, { useEffect } from "react";
import dynamic from "next/dynamic"
const Container  = dynamic(()=> import("./Container"), {ssr:false})
function VoiceCall() {
  const [{voiceCall,socket, userInfo}] = useStateProvider();
 
  useEffect(()=>{
    if(voiceCall.type === "outgoing"){
      socket.current.emit("outgoing-voice-call", {
        to : voiceCall.id,
        from :{
          id : userInfo.id,
          profilePicture : userInfo.profileImage,
          name : userInfo.name,
        },
        callType : voiceCall.callType,
        roomId: voiceCall.roomId,
      })
    }
  },[])
  return <Container data={voiceCall}/>;
}

export default VoiceCall;
