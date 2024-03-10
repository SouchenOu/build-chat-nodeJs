import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { Get_All_Users } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack, BiSearchAlt2 } from "react-icons/bi";
import ChatLIstItem from "./ChatLIstItem";

function AllUsers() {


  const [ {}, dispatch] = useStateProvider();
  const [AllUsers, setAllUsers] = useState([]);

  useEffect(()=>{
    const getUsers = async() =>{
      try{
          const {data : {users}} =  await axios.get(Get_All_Users);
          setAllUsers(users);
          console.log("allUsers-->", AllUsers);
      }catch(err){

      }

    }

    getUsers();
  },[])

  /*******Object.entries(AllUsers): This converts the AllUsers object into an array of [key, value] pairs. In your case, it seems like each key represents an index, and the corresponding value is an array of user data (userList). */
  return <div className=" h-full flex flex-col ">
      <div className="flex items-center gap-20 p-8 " style={{ background: 'linear-gradient(to bottom, #C72C41, #801336)' }}>
        <BiArrowBack className="cursor-pointer  text-white text-2xl" onClick={()=>dispatch({type: reducerCases.SET_ALL_CONTACTS_PAGE})}/>
        <p className="text-xl text-white">New chat</p>
      </div>
      
    <div className="bg-search-input-container-background h-full flex-auto overflow-auto">
      <div className="flex items-center gap-3 h-14">
        <div className="bg-panel-header-background flex items-center gap-5 px-16 mx-10">
            <div>
              <BiSearchAlt2 className="text-panel-header-icon cursor-pointer "/>
            </div>
            <div className="p-3 ">
              <input type="text" placeholder="search for a new friend" className="bg-transparent text-sm focus:outline-none text-white w-full"/>
            </div>

        </div>
      </div>


      {Object.entries(AllUsers).map(([index, userList]) =>{
        return (<div key={Date.now() + index}>
          <div className="text-teal-light pl-10 py-5">{index}</div>
          {userList.map(elem =>{
            return (<ChatLIstItem data={elem} isContactPage={true} key={elem.id}>

            </ChatLIstItem>)
          })}
           </div>)
      })}

    </div>

    
  </div>;
}

export default AllUsers;
