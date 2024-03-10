import React from "react";
import {BiSearchAlt2} from "react-icons/bi";
import { BsFilter } from "react-icons/bs";

function SearchBar() {
  return <div className=" flex py-3 items-center gap-5 pl-7" style={{ background: 'linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)' }}>
    <div className="bg-panel-header-background flex items-center gap-5 px-10">
        <div>
          <BiSearchAlt2 className="text-panel-header-icon cursor-pointer "/>
        </div>
        <div>
          <input type="text" placeholder="search or start a new chat" className="bg-transparent text-sm focus:outline-none text-white w-full"/>
        </div>

    </div>
    <div className="pr-3 pl-5">
      <BsFilter className="text-panel-header-icon "/>
    </div>
    
  </div>;
}

export default SearchBar;
