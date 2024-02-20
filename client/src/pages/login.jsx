import { check_user_Route } from "@/utils/ApiRoutes";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FcGoogle} from "react-icons/fc"

function login() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set an interval to toggle the fade-in effect every second
    const intervalId = setInterval(() => {
      setFadeIn((prev) => !prev);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const router = useRouter()
  const handleLogin = async () =>{
    const provider  = new GoogleAuthProvider();
    const {user : {displayName: name, email, photoUrl: profileImage}} = await signInWithPopup(firebaseAuth, provider);
    console.log("email here-->", email);
    console.log("path", check_user_Route);
    if(email){
      const {data} = await axios.post(check_user_Route, { email });
      if(!data.status){
        router.push()

      }
    }

    
    // alert("login");
    // console.log("user here-->", user);
    // console.log("data here-->", data);

  }
  return <div className=" flex justify-center items-center h-screen w-screen flex-col gap-6 bg-panel-header-background" style={{ background: 'linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)' }}>
      <div className={`flex justify-center items-center text-white gap-2 `}>
      <Image className={`${fadeIn ? 'opacity-500 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`} src="/chat.png" alt="chat" height={300} width={300}/>
      <span className="text-7xl">soukeyChat</span>
      </div>

      <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-4 rounded-lg" onClick={handleLogin}>
        <FcGoogle className="text-4xl"/>
        <span className="text-white text-2xl">SignIn</span>

      </button>
    
    </div>;
}

export default login;
