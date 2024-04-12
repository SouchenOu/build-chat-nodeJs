import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { GET_CONTACTS } from "@/utils/ApiRoutes";
import axios  from "axios";
import React, { useEffect } from "react";
import ChatLIstItem from "./ChatLIstItem";

function List() {
  const [{userInfo, currentUserChat, userContacts, OnlineUsers}, dispatch] = useStateProvider();

  useEffect(()=>{
    const getContacts = async() =>{
      try{
        const {data : {users, onlineUsers}}= await axios(`${GET_CONTACTS}/${userInfo.id}`);
        // dispatch({type : reducerCases.SET_ONLINE_USERS, OnlineUsers : onlineUsers });
        dispatch({type : reducerCases.SET_USER_CONTACTS, userContacts : users });
        // console.log("data hna-->", data);

      }catch(err){

      }

    }
    if(userInfo?.id)
      getContacts();
  },[userInfo])
  return <div>
    {userContacts.map((elem)=>(

     <ChatLIstItem data={elem} key={elem.id}/>
    ))}
  </div>;
}

export default List;
