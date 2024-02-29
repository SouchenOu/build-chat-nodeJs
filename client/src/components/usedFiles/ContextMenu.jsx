import React, { useEffect, useRef } from "react";

function ContextMenu({options, cordinates, contextMenu, setContextMenu}) {
  const contextMenuRef = useRef(null);
  const handleClick = (e, callback) => {
    /**The handleClick function is triggered when a menu item is clicked. It prevents the event from propagating, calls the provided callback function, and then sets the contextMenu state to false. */
    e.stopPropagation();
    callback();
    setContextMenu(false);

  }

  
  useEffect(()=>{
    const handleOutsideClick = (event) =>{
      if(event.target.id !== "context-opener"){
        if(contextMenuRef.current && contextMenuRef.current.contains(event.target))
        {
          setContextMenu(false);
        }

      }

    };
    document.addEventListener("click", handleOutsideClick);
    return () =>{
      document.removeEventListener("click", handleOutsideClick);
    }

  })
  return <div className={`bg-dropdown-background fixed py-2 z-[100] top-[${cordinates.x}] left-[${cordinates.y}] shadow-xl` }  ref={contextMenuRef}>
      <ul>
       
        {options.map(({name , callback})=>(
            <li key={name} onClick={(e) => handleClick(e, callback)} className="px-5 py-2 cursor-pointer hover:bg-background-default-hover">
              <span className="text-white">{name}</span>
            </li> 

        ))}
      </ul>
    </div>;
}

export default ContextMenu;
