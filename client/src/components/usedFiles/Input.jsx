import React from "react";

function Input({name, state, setState, label=false}) {
  return <div className="flex gap-1 flex-col">
    {
      label && <label htmlFor={name} className=" text-lg px-1" style={{ color: "#f7b9c2" }}
      >
        {name}
      </label>
    }
    <div>
      <input className="text-black h-10 text-start focus:outline-none rounded-lg px-5 py-4 w-full" name={name} type="text" value={state} onChange={(e)=>(e.target.value)}/>
    </div>
    </div>
}

export default Input;
