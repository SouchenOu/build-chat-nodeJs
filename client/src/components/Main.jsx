import React, { useEffect, useState } from "react";

import ConversationPanel from "./ConversationPanel";
import SideBar from "./Chatlist/SideBar";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios, { Axios } from "axios";
import { GET_MESSAGES, check_user_Route } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import Chat from "./Chat/Chat";

function Main() {
  const router = useRouter();
  const [{userInfo, currentChatUser, messages}, dispatch] = useStateProvider()

  const [redirectLogin, setRedirectLogin] = useState(false);
  useEffect(()=>{
    if(redirectLogin)
      router.push("/login");
  },[redirectLogin]);


  onAuthStateChanged(firebaseAuth, async(currentUser)=>{
    if(!currentUser){
      setRedirectLogin(true);

    }
    if(!userInfo && currentUser?.email){
      const { data } = await axios.post(check_user_Route, {email : currentUser.email});

      if(!data.status)
      {
        router.push("/login");
      }
      if(data.data){
        const {id ,name, email, profilePicture: profileImage, status} = data.data;
        dispatch({type:reducerCases.SET_USER_INFO, userInfo: {id, name, email, profileImage, status}});
      }
        
    }
   

  })
  useEffect(()=>{
    console.log("enter here");
    
    const getMessage = async() =>{
      const {data : {messages}} = await axios.get(`${GET_MESSAGES}/${userInfo.id}/${currentChatUser.id}`);
      dispatch({type:reducerCases.SET_MESSAGES, messages})
      // console.log("data messages here-->", data);
      console.log("messages here", messages);
     
    }
    if(currentChatUser?.id)
    {
      getMessage();
    }
  },[currentChatUser]);

  return <div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden">
    <SideBar/>
    {currentChatUser ? <Chat /> : <ConversationPanel/>}
    {/* <Chat/> */}
  </div>
}

export default Main;
