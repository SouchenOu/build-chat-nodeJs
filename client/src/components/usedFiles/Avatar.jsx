import Image from "next/image";
import React, { useState } from "react";
import { FaCamera } from 'react-icons/fa';
import ContextMenu from "./ContextMenu";

function Avatar({type, image, setImage}) {
  const [hover, setHover] = useState(false);
  const [isContextVisible, setIsContextVisible] = useState(false);
  const [ContextMenuCoordinate, SetContextMenuCoordinate] = useState({x:0, y:0});

  const showContextMenu = (e) =>{
    /******When an event occurs, browsers often have default actions associated with that event. For example, clicking a link might navigate to a new page, submitting a form might cause a page reload, and pressing the "Enter" key in a text input might submit the form. event.preventDefault() allows you to stop these default actions from happening. */
    e.preventDefault();
    // SetContextMenuCoordinate({x : e.pageX, y : e.pageY});
    setIsContextVisible(true);

  }
  const contextMenuOptions = [{name : "Take a picture", callback : () =>{}}]
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
          <div className={`z-10 h-40 w-40  absolute  flex items-center justify-center gap-3 flex-col ${hover ? "visible" : "hidden" }` } onClick={(e)=>showContextMenu(e)}>
            <FaCamera className="text-2xl" id="text-opener" onClick={(e)=>showContextMenu(e)}/>
            <span className=""  style={{ color: '#EE4540' }}>Change your picture</span>
          </div>
            <div className="h-40 w-40" >
              <Image src={image} alt="avatar" className="rounded-full" fill onClick={(e)=>showContextMenu(e)}/>
            </div>
            {
              isContextVisible && <ContextMenu options={contextMenuOptions} cordinates={ContextMenuCoordinate} contextMenu={isContextVisible} setContextMenu={setIsContextVisible}/>
            }

        </div>
       )

       }
    </div>
  </>
  )
  
  
}

export default Avatar;
