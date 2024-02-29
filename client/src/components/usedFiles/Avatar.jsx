import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCamera } from 'react-icons/fa';
import ContextMenu from "./ContextMenu";
import PhotoUpload from "./PhotoUpload";

function Avatar({type, image, setImage}) {
  const [hover, setHover] = useState(false);
  const [isContextVisible, setIsContextVisible] = useState(false);
  const [ContextMenuCoordinate, SetContextMenuCoordinate] = useState({x:0, y:0});
  const [uploadPhoto, setUploadPhoto] = useState(false)

  const showContextMenu = (e) =>{
    /******When an event occurs, browsers often have default actions associated with that event. For example, clicking a link might navigate to a new page, submitting a form might cause a page reload, and pressing the "Enter" key in a text input might submit the form. event.preventDefault() allows you to stop these default actions from happening. */
    e.preventDefault();
    SetContextMenuCoordinate({x : e.pageX, y : e.pageY});
    setIsContextVisible(true);

  }

  useEffect(()=>{
    if(uploadPhoto){
      const data = document.getElementById("photo-picker") ;
      data.click();
      document.body.onfocus = (e) =>{
        setUploadPhoto(false);
      }
      
    }
  }, [uploadPhoto])
  const contextMenuOptions = [
    {name : "Take a photo", callback : () =>{}},
     {name : "Choose from Library", callback : () =>{}},
     {name : "Upload photo", callback : () =>{
      console.log("upload here-->", uploadPhoto);
        setUploadPhoto(true);
     }},
     {name : "remove photo", callback : () =>{
        setImage("/default-avatar.jpg")
     }},



  
  ]

/*****const file = e.target.files[0];: Extracts the selected file from the event object (e). The event is typically triggered when a user selects a file using a file input.

const reader = new FileReader();: Creates a new instance of the FileReader object. The FileReader object allows you to read the contents of a Blob or File. In this case, it will be used to read the content of the selected image file.

const data = document.createElement("img");: Creates a new img element using the document.createElement method. This element will be used to temporarily hold the image data before setting it as the source of the actual image element in the React component.

reader.onload = function (event) { ... };: Sets up an event handler for the onload event of the FileReader. This event is triggered when the reading operation is successfully completed. Inside the event handler:

data.src = event.target.result;: Sets the src attribute of the dynamically created img element (data) with the result of the file reading operation. This result is a data URL representing the contents of the image file.
data.setAttribute("data-src", event.target.result);: Sets a data-src attribute on the img element with the same data URL. This additional attribute may be used for other purposes in the application.
In summary, the photoChange function is designed to read the content of a selected image file, convert it into a data URL, and set it as the source of a dynamically created img element (data). This process allows for the temporary handling and previewing of the selected image before updating the actual image in the React component. */
  const photoChange = async (e) =>{
    console.log("enter here ues");
    const file = e.target.files[0];
    const reader = new FileReader();
    const data= document.createElement("img");
    reader.onload = function (event) {
      data.src = event.target.result;
      data.setAttribute("data-src", event.target.result);
    };

    reader.readAsDataURL(file);
    setTimeout(()=>{
      console.log(data.src)
      setImage(data.src);
    },100);
    

  }
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
          <div className={`z-10 h-40 w-40  absolute  flex items-center justify-center gap-3 flex-col ${hover ? "visible" : "hidden" }` } onClick={(e)=>showContextMenu(e)} id="context-opener">
            <FaCamera className="text-2xl" id="context-opener" onClick={(e)=>showContextMenu(e)}/>
            <span className=""  style={{ color: '#EE4540' }} id="context-opener">Change your picture</span>
          </div>
            <div className="h-40 w-40" >
              <Image src={image} alt="avatar" className="rounded-full" fill onClick={(e)=>showContextMenu(e)}/>
            </div>
            {
              isContextVisible && <ContextMenu options={contextMenuOptions} cordinates={ContextMenuCoordinate} contextMenu={isContextVisible} setContextMenu={setIsContextVisible}/>
            }
            {
              uploadPhoto && <PhotoUpload onChange={photoChange}/>
            }

        </div>
       )

       }
    </div>
  </>
  )
  
  
}

export default Avatar;
