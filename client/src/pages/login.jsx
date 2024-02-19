import Image from "next/image";
import React from "react";

function login() {
  return <div className=" flex justify-center items-center h-screen w-screen flex-col gap-6 bg-panel-header-background" style={{ backgroundColor: '#801336' }}>
    <div className="flex justify-center items-center text-white gap-2">
      <Image src="/chat.png" alt="chat" height={300} width={300}/>
      <span className="text-7xl">soukeyChat</span>
    </div>
    
    </div>;
}

export default login;
