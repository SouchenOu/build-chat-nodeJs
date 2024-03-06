import Avatar from "@/components/usedFiles/Avatar";
import Input from "@/components/usedFiles/Input";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { REGISTER_USER_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function register() {
  const [{userInfo, newUser}] = useStateProvider();

  const [fadeIn, setFadeIn] = useState(false);
  const[name, setName] = useState(userInfo?.name, "");
  const[about, setAbout] = useState("");
  const [image, setImage]= useState("/default-avatar.jpg");
  const [ email, setEmail] = useState("");


  useEffect(()=>{
    //if it is not a new user and there is no userInfo.email 
    if(!newUser && !userInfo?.email)
        router.push("/login")
    else if(!newUser && userInfo?.email)
      router.push("/")
  },[])
  useEffect(() => {
    // Set an interval to toggle the fade-in effect every second
    const intervalId = setInterval(() => {
      setFadeIn((prev) => !prev);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const handlerRegister = async () =>{
    console.log("regiter");
    // console.log("userInfo here-->", userInfo);
    if(validateDetails())
    {
      // const email = userInfo?.email;
      console.log("email-->", email);
      try{
        const {data} = await axios.post(REGISTER_USER_ROUTE, {email, name, about , image});
        console.log("data here-->", data);

        if(data.status){
          dispatch({type:reducerCases.SET_NEW_USER, newUser : false});
          dispatch({type: reducerCases.SET_USER_INFO, userInfo : {name, email, profileImage : image, status : about}});
          Router.push("/")
        }

      }catch(err){

      }

    }

  }

  const validateDetails = () =>{
    console.log("name here", name);
    if(name?.length < 3)
      return false;
    else
      return true;
  } 
  // console.log("user here-->", userInfo);
  return <div className="flex justify-center items-center h-screen w-screen flex-col gap-6 text-white"  style={{ background: 'linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)' }}>
    <div className="flex items-center justify-center">
      <Image className={`${fadeIn ? 'opacity-500 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`} src="/chat.png" alt="chat" height={300} width={300}/>
      <span className="text-4xl">SignUp</span>

    </div>
    
    <h2 className="text-2xl">Create your profile</h2>
    <div className="flex gap-6 mt-6">
      <div className="flex flex-col items-center justify-center gap-5">
        <Input name="Email" status="Email" setState={setEmail} label/>
        <Input name="display_name" status="name" setState={setName} label/>
        <Input name="About" status="about" setState={setAbout} label/>
        <div className="flex items-center justify-center">
            <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-4 w-72 rounded-lg" onClick={()=> handlerRegister()}>Create Profile </button>
        </div>
      </div>
        <div>
          <Avatar type="xl" image={image} setImage={setImage}/>
        </div>

      
    </div>
    
    
    </div>;
}

export default register;
