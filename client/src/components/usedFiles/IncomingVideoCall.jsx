import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import Image from "next/image";
import React from "react";

function IncomingVideoCall() {
  const [{incomingVideoCall,videoCall, socket}, dispatch] = useStateProvider();
  console.log("incoming video call****->", incomingVideoCall);
  const rejectCall = () =>{
    socket.current.emit("reject-incoming-call", {from : videoCall.id})
    
  }
  const AcceptCall = () =>{
    console.log("enter here to accept");
    dispatch({type:reducerCases.SET_VIDEO_CALL, videoCall : {...incomingVideoCall, type: "in-coming", callType: "video", roomId : Date.now()}});
    dispatch({type:reducerCases.SET_INCOMING_VIDEO_CALL, incomingVideoCall: undefined});
    socket.current.emit("accept-incoming-call", {id : incomingVideoCall.id});

  }
   return <div className="h-40 w-[350px] fixed bottom-8  right-6 z-50 rounded-sm flex gap-5 items-center justify-start p-[20px] bg-conversation-panel-background text-white drop-shadow-2xl border-icon-green border-2 py-14">

    <div>
      <Image src={incomingVideoCall.profilePicture} alt="avatar" height={70} width={70} className="rounded-full"/>
    </div>
    <div className="flex flex-col gap-[20px]">
      <div className="text-2xl text-bold">{incomingVideoCall.name}</div>
      <div className="text-xl">Incoming video call</div>
      <div className="flex gap-2 mt-[2]">
        <button className="bg-red-500 p-1 px-3 text-sm font-bold rounded-full" onClick={rejectCall}>Reject </button>
        <button className="bg-red-500 p-1 px-3 text-sm font-bold rounded-full" onClick={AcceptCall}>Accept</button>

      </div>
    </div>
  </div>
}

export default IncomingVideoCall;
