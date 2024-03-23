import { useStateProvider } from "@/context/StateContext";
import React, { useRef, useState } from "react";
import { FaMicrophone, FaPauseCircle, FaPlay, FaStop, FaTrash } from "react-icons/fa";
import { MdSend } from "react-icons/md";

function CaptureAudio({hide}) {
  const [Isrecording, setIsRecording] = useState(false);
  const [RecordedAudio, setRecordedAudio] = useState(false);
  const [waveForm, setWaveForm] = useState(false);
  const [RecordingDuration, setRecordingDuration] = useState(0);
  const [currentPLayBackTime, setCurrentPLayBackTime] = useState(false);
  const [ totalDuration, setTotalDuration]  = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);


  const [{userInfo,currentChatUser , socket}, dispatch] = useStateProvider();

  const handlePLayRecording = () => {

  }

  const handleStopRecording = () => {

  }
  const handleStartRecording = () =>{

  }

  const handlePauseRecording = () =>{

  }

  const sendRecording = async () =>{

  } 
  const AudioRef = useRef(null);
  const mediaRecordedRef = useRef(null);
  const waveFormRef = useRef(null); 

  const formatTime = (time) =>{
    if(isNaN(time)) return "00:00";
    const minutes = Math.floor(time/60);
    const seconds = Math.floor(time % 60);

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  }

  return <div className="flex text-2xl w-full justify-end items-center">
    <div className="pt-1">
        <FaTrash className="cursor-pointer text-white" onClick={()=>hide()}/>
    </div>
    <div className=" mx-3 py-2 px-3 text-white text-lg flex gap-3 justify-center items-cente" style={{ background: 'linear-gradient(to bottom, #C72C41, #801336)' }} >
      {Isrecording 
      ? (<div className="text-red-500 animate-pulse text-center">Recording<span>{RecordingDuration}s</span></div> )
      : (<div>{RecordedAudio && <> {isPlaying ? <FaPlay onClick={handlePLayRecording}/> : <FaStop onClick={handleStopRecording}/>}</>}</div>) }
      <div className="w-60" ref={waveFormRef} hidden={Isrecording}/>

        {RecordedAudio && isPlaying && (<span>{formatTime(currentPLayBackTime)}</span> )}
        {RecordedAudio && !isPlaying && (<span>{formatTime(totalDuration)}</span>)}

      <audio ref={AudioRef} hidden/>

      <div className="mr-4">
        {!Isrecording ? (<FaMicrophone className="text-red-500 cursor-pointer" onClick={handleStartRecording}/>) : (<FaPauseCircle className="text-red-500 cursor-pointer" onClick={handlePauseRecording}/>)}
      </div>
      <div>
        <MdSend className="cursor-pointer" title="Send vocal" onClick={sendRecording}/>
      </div>
    </div>
    
  </div>;
}

export default CaptureAudio;
