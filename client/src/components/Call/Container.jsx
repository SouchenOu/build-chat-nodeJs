import { useStateProvider } from "@/context/StateContext";
import React, { useState } from "react";
import Image from "next/image"
import { MdOutlineCallEnd } from "react-icons/md";
import { reducerCases } from "@/context/constants";

function Container({data}) {
  const [{socket, userInfo}, dispatch] = useStateProvider();
  console.log("data here call ->", data);
  const endCall = () =>{
    dispatch({type: reducerCases.END_CALL});
  }
  const [callAccepted, setCallAccepted] = useState(false);
  return <div className="border-conversation-border border-1 gap-[100px] w-full bg-conversation-panel-background flex flex-col h-[100vh] overflow-hidden justify-center text-white">
      <div className="flex flex-col gap-3 items-center">
        <span className="text-5xl">{data.name}</span>
        <span className="text-lg">{callAccepted && data.callType !== 'video' ? 'on going call' : 'Calling'}</span>
      </div>
      {(!callAccepted || data.callType === 'audio') && <div className="flex flex-col items-center ">
        <Image  className="rounded-full" src={data.profilePicture} alt="avatar" height={300} width={300}/>
        </div>}
      <div className="flex flex-col items-center ">
        <MdOutlineCallEnd className="text-7xl bg-red-700 rounded-full p-[12px] cursor-pointer" onClick={endCall}/>
      </div>
  </div>;
}

export default Container;
