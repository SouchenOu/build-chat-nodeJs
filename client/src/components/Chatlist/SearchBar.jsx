import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { FILTER_CONTACTS } from "@/utils/ApiRoutes";
import  axios from "axios";
import React, { useEffect, useState } from "react";
import {BiSearchAlt2} from "react-icons/bi";
import { BsFilter } from "react-icons/bs";

function SearchBar({open, setOpen}) {
  const [valueInput, setValutInput] = useState("");
  const [{userInfo, currentCHatUser, filtredContacts}, dispatch] = useStateProvider();
  useEffect(()=>{
    const FilterContactsfunc = async () =>{
        try{
          // if (valueInput.trim() === '') {
          //   dispatch({ type: reducerCases.SET_CONTACTS_SEARCH, filtredContacts: [] });
          //   setOpen(!open);
          // }
          const {data : {users}} = await axios.post(FILTER_CONTACTS, {userId : userInfo.id, characters : valueInput});

          dispatch({ type: reducerCases.SET_CONTACTS_SEARCH, filtredContacts: users });
        }catch(err){

        }
    }
    FilterContactsfunc();

  },[userInfo, valueInput, dispatch])
  return <div className=" flex py-3 items-center gap-5 pl-7" style={{ background: 'linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)' }} onClick={()=> setOpen(true)}>
    <div className="bg-panel-header-background flex items-center gap-5 px-10">
        <div>
          <BiSearchAlt2 className="text-panel-header-icon cursor-pointer " />
        </div>
        <div>
          <input value={valueInput} type="text" placeholder="search or start a new chat" className="bg-transparent text-sm focus:outline-none text-white w-full" onChange={(e)=>setValutInput(e.target.value)}/>
        </div>

    </div>
    <div className="pr-3 pl-5">
      <BsFilter className="text-panel-header-icon "/>
    </div>
    
  </div>;
}

export default SearchBar;
