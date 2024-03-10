import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { Get_All_Users } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";

function AllUsers() {


  const [ {}, dispatch] = useStateProvider();
  useEffect(()=>{
    const getUsers = async() =>{
      const {data : {users}} =  await axios.get(Get_All_Users);

    }

    getUsers();
  },[])
  return <div className=" h-full flex flex-col">
    <div>
      <div className="pt-4 pl-4 text-2xl text-white">
        <BiArrowBack className="cursor-pointer" onClick={()=>dispatch({type: reducerCases.SET_ALL_CONTACTS_PAGE})}/>
      </div>
    </div>
  </div>;
}

export default AllUsers;
