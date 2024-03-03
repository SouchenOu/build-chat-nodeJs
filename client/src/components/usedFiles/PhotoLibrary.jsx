import React from "react";
import {IoClose} from "react-icons/io5"

function PhotoLibrary({setImage, hidePhotoLibrary}) {
  /****If an element with position: relative we can change his top, buttom , left and right */
  return <div className="fixed top-10 left-0 max-h-[100vh] max-w[100vw] h-full w-full flex justify-center items-center">
    <div className="h-max w-max bg-gray-900 gap-6 rounded-lg p-5">
      <div className="" onClick={()=>hidePhotoLibrary(false)}>
        <IoClose className="h-30 w-30 cursor-pointer"/>
      </div>
      

    </div>
    
  </div>;
}

export default PhotoLibrary;
