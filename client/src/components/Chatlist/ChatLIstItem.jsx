import React from "react";
import Avatar from "../usedFiles/Avatar";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { calculateTime } from "@/utils/CalculateTime";

function ChatLIstItem({data,isContactsPage = false}) {
  console.log("yes data here-->", data.totalUnreadMessages);
  const [{userInfo, currentChatUser}, dispatch] = useStateProvider();
  const handleUserClick = () =>{
      if(isContactsPage)
      {
        dispatch({type: reducerCases.CHANGE_CURRENT_CHAT_USER, user : {
          name : data.name,
          about : data.about,
          profilePicture : data.profilePicture,
          email: data.email,
          id : userInfo.id === data.senderId ? data.recipientId : data.senderId,
        }})
      }

   
        dispatch({type: reducerCases.CHANGE_CURRENT_CHAT_USER, user : {...data}});
    

  }
  return <div className={`${data.totalUnreadMessages > 0 ? 'bg-panel-header-background' : ''} flex cursor-pointer items-center hover:bg-background-default-hover`} onClick={handleUserClick}>
    <div className="min-w-fit px-5 pt-2 pb-1  flex flex-col">
      <Avatar type="lg" image={data?.profilePicture}/>
     
    </div>
    <div className="min-h-full justify-center w-full mt-3 pr-2 flex flex-col">
      <div className="flex justify-between">
        <div className="">
          <p className="text-white text-xl">{data.name}</p>
        </div>
        {
          !isContactsPage && <div> 
            <span className={`${data.totalUnreadMessages > 0 ? 'text-secondary' : 'text-icon-green'}`}>{calculateTime(data.createdAt)}</span>
          </div>
        }
      </div>
      <div className="flex border-b border-conversation-border">
      <div className="flex justify-between w-full pb-2 pt-1 p3-2">
        <span className="text-secondary line-clamp-1 text-sm">
          {isContactsPage ? (data.about) : (<div className="flex items-center gap-1 max-w-[200px] sm:max-w-[250Px] md:max-w-[300px]">

          </div>)}
          </span>
      </div>
    </div>
    </div>
   
  </div>;
}

export default ChatLIstItem;
