import React, { useEffect, useState } from "react";

import ConversationPanel from "./ConversationPanel";
import SideBar from "./Chatlist/SideBar";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { check_user_Route } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

function Main() {
  const router = useRouter();
  const [{userInfo}, dispatch] = useStateProvider()
  const [redirectLogin, setRedirectLogin] = useState(false);
  useEffect(()=>{
    if(redirectLogin)
      router.push("/login");
  },[redirectLogin]);


  onAuthStateChanged(firebaseAuth, async(currentUser)=>{
    if(!currentUser){
      setRedirectLogin(true);

    }
    console.log("current user", currentUser);
    if(!userInfo && currentUser?.email){
      const { data } = await axios.post(check_user_Route, {email : currentUser.email});

      if(!data.status)
      {
        router.push("/login");
      }
      console.log("data hna main", data);
      if(data.data){
        const {id ,name, email, profilePicture: profileImage, status} = data.data;
        dispatch({type:reducerCases.SET_USER_INFO, userInfo: {id, name, email, profileImage, status}});
        console.log("userInfo hna-->", userInfo);
      }
        
    }
   

  })
  return <div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden">
    <SideBar/>
    <ConversationPanel/>
  </div>
}

export default Main;
