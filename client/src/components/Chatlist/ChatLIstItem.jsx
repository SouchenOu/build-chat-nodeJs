import React from "react";
import Avatar from "../usedFiles/Avatar";

function ChatLIstItem({data,isContactsPage = false}) {
  return <div className={`flex cursor-pointer items-center hover:bg-background-default-hover`}>
    <div className="min-w-fit px-5 pt-2 pb-1  flex flex-col">
      <Avatar type="lg" image={data?.profilePicture}/>
     
    </div>
    <div className="min-h-full justify-center w-full mt-3 pr-2 flex flex-col">
      <div className="flex justify-between">
        <div className="">
          <p className="text-white text-xl">{data.name}</p>
        </div>
      </div>
    </div>
  </div>;
}

export default ChatLIstItem;
