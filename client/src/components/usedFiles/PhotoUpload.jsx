import React from "react";
import ReactDOM from "react-dom"

function PhotoUpload({onChange}) {
  const component = (
    <input type="file" id="photo-picker" onChange={onChange}></input>
  )
  return ReactDOM.createPortal(component, document.getElementById("photo-picker-element"))
}

export default PhotoUpload;
