import { useStateProvider } from "@/context/StateContext";
import { HOST } from "@/utils/ApiRoutes";
import React, { useEffect, useRef, useState } from "react";
// import WaveSurfer from "wavesurfer.js";
import Avatar from "../usedFiles/Avatar";
import { FaPlay, FaStop } from "react-icons/fa";
// import WaveSurfer from "wavesurfer.js";
import { calculateTime } from "@/utils/CalculateTime";
import MessageStatus from "../usedFiles/MessageStatus";

function VoiceMessage({message}) {

  const [{currentChatUser, userInfo}] = useStateProvider();
  const [audioMessage, setAudioMessage] = useState(null);
  const [Isrecording, setIsRecording] = useState(false);
  const [RecordedAudio, setRecordedAudio] = useState(null);
  // const [waveForm, setWaveForm] = useState(null);
  const [RecordingDuration, setRecordingDuration] = useState(0);
  const [currentPLayBackTime, setCurrentPLayBackTime] = useState(0);
  const [ totalDuration, setTotalDuration]  = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rendredAudio, setRendredAudio] = useState(null);
  const AudioRef = useRef(null);
  const mediaRecordedRef = useRef(null);
  const waveFormRef = useRef(null); 
  const waveForm = useRef(null);


  
  const handlePLayAudio = () => {
    if(audioMessage){
      waveForm.current.stop();
      waveForm.current.play();
      audioMessage.play();
      setIsPlaying(true);
    }

  }

  const handlePauseAudio = () =>{
    waveForm.current.stop();
    audioMessage.pause();
    setIsPlaying(false);

  }

  const formatTime = (time) =>{
    if(isNaN(time)) return "00:00";
    const minutes = Math.floor(time/60);
    const seconds = Math.floor(time % 60);

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  }


  return <div className={`flex items-center gap-5 text-white px-4 pr-2 py-4 text-sm rounded-md ${message.senderId === currentChatUser.id ? 'bg-incoming-background' : ''} `} style={message.senderId !== currentChatUser.id ? { background: 'linear-gradient(to bottom, #661f29, #4e091f)' } : null} >
    <div>
      <Avatar type="lg" image={currentChatUser?.profilePicture}/>
    </div>
    <div className="cursor-pointer text-xl">
      {!isPlaying ? <FaPlay onClick={handlePLayAudio}/> : <FaStop onClick={handlePauseAudio}/>}

    </div>
    <div className="relative">
      <div className="w-60" ref={waveFormRef}>
        <div className="text-bubble-meta text-[11px] pt-1 flex justify-between absolute bottom-[-22px] w-full">
          <span>{formatTime(isPlaying ? currentPLayBackTime : totalDuration) }</span>
          <div className="flex gap-1">
            <span>{calculateTime(message.createdAt)}</span>
            {
              message.senderId === userInfo.id && <MessageStatus  MessageStatus={message.messageStatus}/>
             }

          </div>
        </div>

      </div>
    </div>
  </div>;
}

export default VoiceMessage;
