import React, { useEffect } from "react";
import dynamic from "next/dynamic"
import { useStateProvider } from "@/context/StateContext";
const Container  = dynamic(()=> import("./Container"), {ssr:false})

function VideoCall() {
  console.log("enter here for recipient******");
  const [{videoCall,socket, userInfo}] = useStateProvider();
 
  useEffect(()=>{
    if(videoCall.type === "outgoing"){
      socket.current.emit("outgoing-video-call", {
        to : videoCall.id,
        from :{
          id : userInfo.id,
          profilePicture : userInfo.profileImage,
          name : userInfo.name,
        },
        callType : videoCall.callType,
        roomId: videoCall.roomId,
      })
    }
  },[])
  return <Container data={videoCall}/>;
}

export default VideoCall;
