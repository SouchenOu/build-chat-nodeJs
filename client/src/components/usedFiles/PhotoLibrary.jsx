import Image from "next/image";
import React from "react";
import {IoClose} from "react-icons/io5"

function PhotoLibrary({setImage, hidePhotoLibrary}) {

  const images = ["/avatars/1.png", "/avatars/2.png", "/avatars/3.png", "/avatars/4.png" , "/avatars/5.png", "/avatars/4.jpg", "/avatars/5.png", "/avatars/6.png", "/avatars/4.png", "/avatars/7.png", "/avatars/8.png", "/avatars/9.png"]
  /****If an element with position: relative we can change his top, buttom , left and right */
  return <div className="fixed top-0 left-0  h-full w-full flex justify-center items-center z-10">
    <div className="h-max w-max bg-gray-900 gap-6 rounded-lg p-11">
      <div className="pt-8 pe-8 cursor-pointer" onClick={()=>hidePhotoLibrary(false)}>
        <IoClose className="h-10 w-10 cursor-pointer"/>
      </div>
      <div className=" grid grid-cols-3  justify-center items-center gap-16">
        {images.map((elem, index) => (
          <div onClick={()=>{setImage(images[index]), hidePhotoLibrary(false)}}>
            <div className="h-24 w-24 cursor-pointer relative">
              <Image src={elem} alt="avatar" fill/>
            </div>
          </div>

        ))}

      </div>

    </div>
    
  </div>;
}

export default PhotoLibrary;
