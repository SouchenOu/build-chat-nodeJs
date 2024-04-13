import { useStateProvider } from "@/context/StateContext";
import React from "react";
import dynamic from "next/dynamic"
const Container  = dynamic(()=> import("./Container"), {ssr:false})
function VoiceCall() {

  const [{voiceCall,socket, userInfo}] = useStateProvider();
  return <Container data={voiceCall}/>;
}

export default VoiceCall;
