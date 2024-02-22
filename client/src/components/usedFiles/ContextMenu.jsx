import React, { useRef } from "react";

function ContextMenu({options, cordinates, contextMenu, setContextMenu}) {
  const contextMenuRef = useRef(null);
  const handleClick = (e, callback) => {

  }
  return <div className={`bg-dropdown-background fixed py-2 z-[100] top-[${cordinates.x}] left-[${cordinates.y}] shadow-xl` }  ref={contextMenuRef}>
      <ul>
       
        {options.map(({name , callback})=>(
            <li key={name} onClick={(e) => handleClick(e, callback)} className="px-5 py-2 cursor-pointer">
              <span className="text-white">{name}</span>
            </li> 

        ))}
      </ul>
    </div>;
}

export default ContextMenu;
