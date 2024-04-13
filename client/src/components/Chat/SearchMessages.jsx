import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { searching_messages } from "@/utils/ApiRoutes";
import { calculateTime } from "@/utils/CalculateTime";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  axios  from "axios";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaFontAwesome } from "react-icons/fa";

//searching for messages

function SearchMessages() {
  const [{userInfo, currentChatUser}, dispatch] = useStateProvider();
  const [ valueInput, setValueInput] = useState("");
  const [searchingData, setSearchingData] = useState([]);

  useEffect(()=>{
    const search_messages = async () =>{
      if(valueInput )
      {
        const {data} = await axios.post(searching_messages, {characters : valueInput, fromId : userInfo.id, toId: currentChatUser.id});
        setSearchingData(data);

      }
          


    }
    search_messages();
  },[valueInput]);
  return <div className="border-conversation-border border-[10px] w-full bg-conversation-border flex flex-col z-[10] max-h-screen">
    <div className="h-[16]  p-[10px] flex gap-[10] items-center bg-panel-header-background ">
      <FontAwesomeIcon icon={faCircleXmark} className="cursor-pointer text-icon-lighter text-2xl" onClick={()=> dispatch({type : reducerCases.SET_MESSAGE_SEARCH})}  />
      <h1 className="text-2xl p-[10px] font-bold text-white">Search messages</h1>

    </div>
    <div className="overflow-auto custom-scrollbar h-full">
      <div className="flex flex-col items-center w-full">
        <div className="flex px-5 items-center gap-3 h-14 w-full">
          <div className=" bg-panel-header-background flex items-center gap-[5] px-[10px]">
            <div>
              <BiSearchAlt className="text-panel-header-icon cursor-pointer text-2xl"/>
            </div>
            <div>
              <input value={valueInput} onChange={(e)=>setValueInput(e.target.value)} type="text" placeholder="Search" className="bg-transparent text-xl focus:outline-none text-white w-[700px]  p-[10px]"/>
            </div>

          </div>

        </div>
        <span className="mt-[40px] text-secondary">
          {!valueInput.length && `Search for messages with ${currentChatUser.name}`}
        </span>
        <div className="w-full flex flex-col justify-center" >
          {valueInput && !searchingData.length && <span className="text-secondary w-full flex  justify-center">No messages found</span>}
          
        </div>
        <div className="flex flex-col w-full h-full">
          {searchingData.map((elem)=>(
              <div className="p-[10px] cursor-pointer flex flex-col justify-center hover:bg-background-default-hover w-full px-5 border-b-[0.1px] border-secondary py-5">
                <div className="text-sm text-secondary">{calculateTime(elem.createdAt)}</div>
                <div className="text-icon-green">{elem.content}</div>
              </div>
            ))}
        </div>


      </div>

    </div>
    
    {/* <div className="flex items-center gap-[10px] m-[10px]">
      <BiSearchAlt className="text-panel-header-icon cursor-pointer text-xl"/>
      <input type="text" placeholder="Rechercher" className="p-[10px] w-full text-xl border-none"/>

    </div> */}
   

    </div>;
}

export default SearchMessages;
