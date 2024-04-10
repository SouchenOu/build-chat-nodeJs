import { HOST } from "@/utils/ApiRoutes";
import React from "react";

function ImageMessage({message}) {

  const testMessage = `${HOST}/${message.content}`;
  return <div>

  </div>;
}

export default ImageMessage;
