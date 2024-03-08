import React from "react";
import ChatListHeader from "./ChatListHeader";
import SearchBar from "./SearchBar";
import List from "./List";


function SideBar() {
  return <div className="flex flex-col max-h-screen z-20">

    <ChatListHeader/>
    <SearchBar/>
    <List/>
  </div>
}

export default SideBar;
