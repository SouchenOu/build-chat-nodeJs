import { HOST } from "@/utils/ApiRoutes";
import React from "react";

function ImageMessage({message}) {

  const testMessage = `${HOST}/${message.content}`;
  console.log("testMessage-->", testMessage);
  return <div>

  </div>;
}

export default ImageMessage;
