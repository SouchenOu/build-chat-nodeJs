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
        <div className="relative cursor-pointer z-0" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
          <div className={`z-10 h-40 w-40  absolute  flex items-center justify-center gap-3 flex-col ${hover ? "visible" : "hidden" }` }>
            <FaCamera className="text-2xl" id="text-opener"/>
            <span className=""  style={{ color: '#EE4540' }}>Change your picture</span>
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
