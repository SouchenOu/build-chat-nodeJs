import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React from "react";

function IncomingCall() {
  const [{incomingVoiceCall}, dispatch] = useStateProvider();
  console.log("incoming voice call****", incomingVoiceCall);

  const rejectCall = () =>{

  }

  const AcceptCall = () =>{

  }
  return <div className="h-40 w-[350px] fixed bottom-8  right-6 z-50 rounded-sm flex gap-5 items-center justify-start p-[20px] bg-conversation-panel-background text-white drop-shadow-2xl border-icon-green border-2 py-14">

    <div>
      <Image src={incomingVoiceCall.profilePicture} alt="avatar" height={70} width={70} className="rounded-full"/>
    </div>
    <div className="flex flex-col gap-[20px]">
      <div className="text-2xl text-bold">{incomingVoiceCall.name}</div>
      <div className="text-xl">Incoming voice call</div>
      <div className="flex gap-2 mt-[2]">
        <button className="bg-red-500 p-1 px-3 text-sm font-bold rounded-full" onClick={rejectCall}>Reject </button>
        <button className="bg-red-500 p-1 px-3 text-sm font-bold rounded-full" onClick={AcceptCall}>Accept</button>

      </div>
    </div>
  </div>;
}

export default IncomingCall;
