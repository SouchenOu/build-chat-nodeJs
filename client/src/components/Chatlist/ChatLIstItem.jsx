import React from "react";
import Avatar from "../usedFiles/Avatar";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

function ChatLIstItem({data,isContactsPage = false}) {
  const [{userInfo, currentChatUser}, dispatch] = useStateProvider();
  const handleUserClick = () =>{
    // if(currentChatUser.id === data.id){
        dispatch({type: reducerCases.CHANGE_CURRENT_CHAT_USER, user : {...data}});
        // dispatch({type:reducerCases.SET_ALL_CONTACTS_PAGE});
    //}

  }
  return <div className={`flex cursor-pointer items-center hover:bg-background-default-hover`} onClick={handleUserClick}>
    <div className="min-w-fit px-5 pt-2 pb-1  flex flex-col">
      <Avatar type="lg" image={data?.profilePicture}/>
     
    </div>
    <div className="min-h-full justify-center w-full mt-3 pr-2 flex flex-col">
      <div className="flex justify-between">
        <div className="">
          <p className="text-white text-xl">{data.name}</p>
        </div>
      </div>
      <div className="flex border-b border-conversation-border">
      <div className="flex justify-between w-full pb-2 pt-1 p3-2">
        <span className="text-secondary line-clamp-1 text-sm">{data.about}</span>
      </div>
    </div>
    </div>
   
  </div>;
}

export default ChatLIstItem;
