import Image from "next/image";
import React, { useState } from "react";
import { FaCamera } from 'react-icons/fa';

function Avatar({type, image, setImage}) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center">

        {type === "sm" && ( 
        <div className="relative h-10 w-10">
            <Image src={image}  alt="avatar" className="rounded-full" fill/>
        </div>
        )}
        {type === "lg" && (
        <div className="relative h-14 w-14 mb-30">
          <Image src={image} alt="avatar" className="rounded-full" fill/>
        </div>
       )}
       {type === "xl" && (
        <div className="relative cursor-pointer" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
          <div className="h-40 w-40  absolute  top-0 left-0 rounded-full flex-col text-center gap-2">
            <FaCamera className="text-2xl" id="text-opener"/>
          </div>
            <div className="h-40 w-40" >
              <Image src={image} alt="avatar" className="rounded-full" fill/>
            </div>

        </div>
       )

       }
    </div>
  </>
  )
  
  
}

export default Avatar;
