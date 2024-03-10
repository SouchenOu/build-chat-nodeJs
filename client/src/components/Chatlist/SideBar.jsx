import React, { useEffect, useState } from "react";
import ChatListHeader from "./ChatListHeader";
import SearchBar from "./SearchBar";
import List from "./List";
import { useStateProvider } from "@/context/StateContext";


function SideBar() {
  const [{contactsPage}] = useStateProvider();
  const [pageType, setPageType] = useState("");

  console.log("constactsPage", contactsPage);

  useEffect(()=>{
    if(contactsPage)
    {
      setPageType("all-contacts");
    }else
    {
      setPageType("default");
    }
  },[contactsPage])
  return <div className="flex flex-col max-h-screen z-20" style={{ background: 'linear-gradient(to bottom, #2c1f2c,#88211e, #910f20, #3d0416)' }}>
    {pageType === "default" && 
    <>
        <ChatListHeader/>
        <SearchBar/>
        <List/>
    </>
     
    }
    
  </div>
}

export default SideBar;
