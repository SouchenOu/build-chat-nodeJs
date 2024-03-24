import { useStateProvider } from "@/context/StateContext";
import React, { useEffect, useRef, useState } from "react";
import { FaMicrophone, FaPauseCircle, FaPlay, FaStop, FaTrash } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import WaveSurfer from "wavesurfer.js";
// import WaveSurfer from "wavesurfer.js";

function CaptureAudio({hide}) {
  const [Isrecording, setIsRecording] = useState(false);
  const [RecordedAudio, setRecordedAudio] = useState(null);
  const [waveForm, setWaveForm] = useState(null);
  const [RecordingDuration, setRecordingDuration] = useState(0);
  const [currentPLayBackTime, setCurrentPLayBackTime] = useState(0);
  const [ totalDuration, setTotalDuration]  = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [rendredAudio, setRendredAudio] = useState(null);
  const AudioRef = useRef(null);
  const mediaRecordedRef = useRef(null);
  const waveFormRef = useRef(null); 


  const [{userInfo,currentChatUser , socket}, dispatch] = useStateProvider();
  useEffect(()=>{
      let interval;
      if(Isrecording){
        interval = setInterval(()=>{
          setRecordingDuration((prevDuration)=>{
            setTotalDuration(prevDuration + 1)
            return prevDuration + 1;

          });

        }, 1000)
      }
      return () => {
        clearInterval(interval)
      }
  },[Isrecording])
  useEffect(()=>{
    const wavesufer = WaveSurfer.create({
      container : waveFormRef.current,
      waveColor: "#ccc",
      progressColor: "#4a9eff",
      cursorColor:"#7ae3c3",
      barWidth: 2,
      height: 30,
      responsive : true,
    });

    setWaveForm(wavesufer);
    wavesufer.on("finish", () =>{
      setIsPlaying(false);

    });
    return () =>{
      wavesufer.destroy();
    };

  },[]);

  useEffect(()=>{
    if(waveForm){
      handleStartRecording();
    }
  }, [waveForm])

  useEffect(()=>{
    if(RecordedAudio){
      const updatePlayBackTime = () =>{
        setCurrentPLayBackTime(RecordedAudio.currentTime)
      }
      RecordedAudio.addEventListenner("timeupdate", updatePlayBackTime);
      return () =>{
        RecordedAudio.removeEventListener("timeupdate", updatePlayBackTime);
      }
    }
  },[RecordedAudio])

  const handlePLayRecording = () => {
    if(RecordedAudio){
      waveForm.stop();
      waveForm.play();
      RecordedAudio.play();
      setIsPlaying(true);
    }

  }

  const handleStopRecording = () => {
    if(mediaRecordedRef.current && Isrecording){
      mediaRecordedRef.current.stop();
      setIsRecording(false);
      waveForm.stop();
      const audioChunks = [];
      mediaRecordedRef.current.addEventListenner("dataavailable", (event)=>{
        audioChunks.push(event.data);
      });

      mediaRecordedRef.current.addEventListenner("stop", ()=>{
        const audioBlob = new Blob(audioChunks, {type: "audio/mp3"})
        const audioFile = new File([audioBlob], "recording.mp3")
        setRendredAudio(audioFile);
      })

    }

  }
  const handleStartRecording = () =>{
    setRecordingDuration(0);
    setCurrentPLayBackTime(0);
    setTotalDuration(0);
    setIsRecording(true);
    navigator.mediaDevices.getUserMedia({audio:true}).then((stream) =>{
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecordedRef.current = mediaRecorder;
      AudioRef.current.srcObject = stream;
      const chunks = [];

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () =>{
        const blob = new Blob(chunks, {type : "audio/ogg, codecs=opus"});
        const audioURL = URL.createObjectURL(blob);
        const audio = new Audio(audioURL);
        setRecordedAudio(audio);
        waveForm.load(audioURL);


      };
      mediaRecorder.start()

    }).catch((error)=>{
      // console.error("Error accessing microphone:", error);
    })

  }

  const handlePauseRecording = () =>{

  }

  const sendRecording = async () =>{

  } 


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
