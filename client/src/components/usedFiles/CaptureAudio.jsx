import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { ADD_AUDIO_MESSAGE_ROUTES } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaMicrophone, FaPauseCircle, FaPlay, FaStop, FaTrash } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import WaveSurfer from "wavesurfer.js";


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
  // useEffect(()=>{
  //   const wavesufer = WaveSurfer.create({
  //     container : waveFormRef.current,
  //     waveColor: "#ccc",
  //     progressColor: "#4a9eff",
  //     cursorColor:"#7ae3c3",
  //     barWidth: 2,
  //     height: 30,
  //     responsive : true,
  //   });

  //   setWaveForm(wavesufer);
  //   wavesufer.on("finish", () =>{
  //     setIsPlaying(false);

  //   });
  //   return () =>{
  //     wavesufer.destroy();
  //   };

  // },[]);
  useEffect(() => {
    waveformRef.current = WaveSurfer.create({
      container: "#waveform",
    });

    return () => {
      if (waveFormRef.current) {
        waveFormRef.current.destroy();
      }
    };
  }, []);

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
      RecordedAudio.addEventListener("timeupdate", updatePlayBackTime);
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
      mediaRecordedRef.current.addEventListener("dataavailable", (event)=>{
        audioChunks.push(event.data);
      });

      mediaRecordedRef.current.addEventListener("stop", ()=>{
        const audioBlob = new Blob(audioChunks, {type: "audio/mp3"})
        const audioFile = new File([audioBlob], "recording.mp3")
        setRendredAudio(audioFile);
      })

    }

  }


  /*****Overall, this function sets up the recording of audio from the user's microphone, handles the recording process, and manages the recorded audio data for further use within the application. */
  const handleStartRecording = () =>{
    setRecordingDuration(0);
    setCurrentPLayBackTime(0);
    setTotalDuration(0);
    setIsRecording(true);
    setRecordedAudio(null);
    /*******navigator.mediaDevices.getUserMedia({audio:true}).then((stream) => {...}): This line requests access to the user's microphone using the getUserMedia method from the navigator.mediaDevices interface. If the user grants permission, it returns a Promise that resolves with a MediaStream object representing the stream from the microphone. */
    navigator.mediaDevices.getUserMedia({audio:true}).then((stream) =>{
      /*****const mediaRecorder = new MediaRecorder(stream);: Once the microphone stream is obtained, a new MediaRecorder object is created, which allows recording media in the browser. */
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecordedRef.current = mediaRecorder;
      AudioRef.current.srcObject = stream;

      /*****const chunks = [];: This initializes an empty array named chunks which will be used to store recorded audio data in chunks. */
      const chunks = [];


      /****mediaRecorder.ondataavailable = (e) => chunks.push(e.data);: This line sets up an event listener for the dataavailable event of the mediaRecorder. When data becomes available (i.e., when the recorder has captured audio), this event is triggered, and the recorded audio data (in the form of Blob objects) is pushed into the chunks array. */
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () =>{
        /*****const blob = new Blob(chunks, {type: "audio/ogg, codecs=opus"});: This creates a Blob object from the recorded audio data stored in the chunks array. The type parameter specifies the MIME type of the blob (in this case, audio data with the Ogg container format and Opus codec). */
        const blob = new Blob(chunks, {type : "audio/ogg, codecs=opus"});
        /****const audioURL = URL.createObjectURL(blob);: This creates a URL for the Blob object, which can be used to access the recorded audio data. */
        const audioURL = URL.createObjectURL(blob);
        /****const audio = new Audio(audioURL);: This creates a new Audio object using the URL of the recorded audio data. */
        const audio = new Audio(audioURL);
        /***setRecordedAudio(audio);: This likely updates some state variable (recordedAudio) with the newly recorded audio. */
        setRecordedAudio(audio);
        waveForm.load(audioURL);


      };
      /****mediaRecorder.start(): This starts the media recorder, initiating the recording process.

 */
      mediaRecorder.start()

    }).catch((error)=>{
      // console.error("Error accessing microphone:", error);
    })

  }

  const handlePauseRecording = () =>{
    waveForm.stop();
    RecordedAudio.pause();
    setIsPlaying(false);

  }

  const sendRecording = async () =>{
    console.log("enter here recording");
    try{
      const formData = new FormData();
      formData.append("audio", rendredAudio);
      const response = await axios.post(ADD_AUDIO_MESSAGE_ROUTES, formData,{headers : {"Content-Type" : "multipart/form-data"}, params : {fromId : userInfo.id, toId: currentChatUser.id}});
      console.log("response here-->", response);
      if(response.status === 201){
        socket.current.emit('send-message',{toId : currentChatUser.id, fromId : userInfo.id, content: response.data.message.content});
        dispatch({type: reducerCases.ADD_MESSAGE, newMessage : {...response.data.message}, fromSelf : true});
      }
    }catch(err){

    }

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
      : (<div>{RecordedAudio && <> {isPlaying ? <FaPlay onClick={handlePLayRecording}/> : <FaStop onClick={handlePauseRecording}/>}</>}</div>) }
      <div className="w-60" ref={waveFormRef} hidden={Isrecording}/>

        {RecordedAudio && isPlaying && (<span>{formatTime(currentPLayBackTime)}</span> )}
        {RecordedAudio && !isPlaying && (<span>{formatTime(totalDuration)}</span>)}

      <audio ref={AudioRef} hidden/>

      <div className="mr-4">
        {!Isrecording ? (<FaMicrophone className="text-red-500 cursor-pointer" onClick={handleStartRecording}/>) : (<FaPauseCircle className="text-red-500 cursor-pointer" onClick={handleStopRecording}/>)}
      </div>
      <div>
        <MdSend className="cursor-pointer" title="Send vocal" onClick={sendRecording}/>
      </div>
    </div>
    
  </div>;
}

export default CaptureAudio;
