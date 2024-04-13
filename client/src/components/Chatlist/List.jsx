import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { FILTER_CONTACTS, GET_CONTACTS } from "@/utils/ApiRoutes";
import axios  from "axios";
import React, { useEffect, useState } from "react";
import ChatLIstItem from "./ChatLIstItem";

function List({open}) {
  const [{userInfo, currentUserChat, userContacts, OnlineUsers, filtredContacts}, dispatch] = useStateProvider();
  console.log("filtettee-->", filtredContacts);
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


  return (
    <div>
      <div>
        {open && <div>
          {filtredContacts.map((elem)=>(
            <ChatLIstItem data={elem}/>
          ))}
          
          </div>}
      </div>
      { !open && <div>{userContacts.map((elem)=>(

            <ChatLIstItem data={elem} key={elem.id}/>
        ))}</div>

      }
      
  </div>

  )
 ;
}

export default List;
