import Image from "next/image";
import React from "react";

function ConversationPannel() {
  return <div className="border-conversation-border border-1 flex items-center justify-center h-[100vh] overflow-hidden" style={{ background: 'linear-gradient(to bottom, #2D132C,#EE4540, #C72C41, #801336)' }}>
    <Image src={"/chat.png"} alt="icon" width={200} height={200}/>
  </div>
}

export default ConversationPannel;
