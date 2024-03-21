import React from "react";
import { BsCheck, BsCheck2All } from "react-icons/bs";

function MessageStatus({MessageStatus}) {
  return <div>
    {MessageStatus === 'sent' && <BsCheck className="text-lg"/>}
    {MessageStatus === 'delivered' && <BsCheck2All className="text-lg"/>}
    {MessageStatus === 'read' && <BsCheck2All className="text-lg text-icon-green"/>}
  
  </div>;
}

export default MessageStatus;
