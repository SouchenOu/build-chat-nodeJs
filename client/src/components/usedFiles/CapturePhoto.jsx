import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

function CapturePhoto({setImage, hide}) {
  const videoRef = useRef(false);
  const capturePhoto = () =>{
    const canvas= document.createElement("canvas");
    canvas.getContext("2d").drawImage(videoRef.current, 0,0, 300, 150);
    setImage(canvas.toDataURL("image/jpeg"));
    hide(false);
  }

  useEffect(()=>{
    let stream;

    const startCamera = async () =>{
      stream = await navigator.mediaDevices.getUserMedia({video: true,audio: false})
      videoRef.current.srcObject= stream;    
    }
    startCamera();
    return () =>{
      stream?.getTracks().forEach((track) => track.stop());
    }

  }, []);
  
  return <div className="fixed top-1/4 left-1/3 h-4/6 w-2/6 flex items-center justify-center bg-gray-900 z-20">
    <div className="flex flex-col gap-4 w-full items-center justify-center">
      <div className="relative top-[-70px] left-60 pt-8 pe-8 cursor-pointer" onClick={()=>hide(false)}>
        <IoClose className="h-10 w-10 cursor-pointer"/>
      </div>
      <div className="flex justify-center border-8">
        <video id="video" width="400" autoPLay  ref={videoRef}></video>
      </div>
      <button className="h-16 w-16 bg-white rounded-full cursor-pointer border-8 p-2 mb-10 " onClick={capturePhoto}></button>
    </div>
  </div>;
}

export default CapturePhoto;
