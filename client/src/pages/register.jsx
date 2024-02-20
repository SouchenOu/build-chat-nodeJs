import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function register() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set an interval to toggle the fade-in effect every second
    const intervalId = setInterval(() => {
      setFadeIn((prev) => !prev);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  const [{userInfo}] = useStateProvider();
  // console.log("user here-->", userInfo);
  return <div className="flex justify-center items-center h-screen w-screen flex-col gap-6 text-white"  style={{ background: 'linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)' }}>
    <div className="flex items-center justify-center">
      <Image className={`${fadeIn ? 'opacity-500 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`} src="/chat.png" alt="chat" height={300} width={300}/>
      <span className="text-4xl">register</span>

    </div>
    <h2 className="text-2xl">Create your profile</h2>
    <div className="flex gap-6 mt-6">
      <div className="flex items-center justify-center">
        {userInfo.name}
      </div>
    </div>
    
    
    </div>;
}

export default register;
