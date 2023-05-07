"use client";
import "regenerator-runtime/runtime";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function Practice() {
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [cameraStart, setCameraStart] = useState<boolean>(true);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [chunks, setChunks] = useState<Blob[]>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string | null>("");

  const {
    transcript: currentTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  function getVideoStream() {
    const constraints = {
      audio: true,
      video: {
        width: 1280,
        height: 720,
      },
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(mediaRecorder);
        setStream(stream);
        setCameraStart(true);

        mediaRecorder.ondataavailable = e => {
          setChunks(prev => [...prev, e.data]);
        };

        if (videoRef?.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((err: Error) => {
        console.log("err", err);
      });
  }

  const handleStartRecording = () => {
    setTranscript("");
    resetTranscript();
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);

    // set delay to stop listening
    setTimeout(() => {
      SpeechRecognition.stopListening();
    }, 1000);

    setTranscript(prev => prev + currentTranscript);
    resetTranscript();
  };

  const handleRecordClick = () => {
    setChunks([]);
    setVideoURL(null);
    handleStartRecording();

    console.log("videoRef?.current", videoRef?.current);
    console.log("stream", stream);

    if (videoRef?.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }

    // getVideoStream();
    if (mediaRecorder) {
      if (isRecording) {
        mediaRecorder.stop();
        setIsRecording(false);
      } else {
        mediaRecorder.start();
        setIsRecording(true);
      }
    }
  };

  const handleStopClick = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();

      setIsRecording(false);
      handleCameraOffClick();
      handleStopRecording();
    }
  };

  const handleCameraOffClick = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      setStream(null);
      setCameraStart(false);
    }
  };

  const handleStartCamera = () => {
    getVideoStream();
    setChunks([]);
    setVideoURL(null);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (navigator.mediaDevices) {
      console.log("getUserMedia supported.");
      getVideoStream();
    } else {
      console.log("getUserMedia not supported on your browser!");
    }
  }, []);

  useEffect(() => {
    if (isRecording) {
      SpeechRecognition.startListening({ language: "id-ID", continuous: true });
    }
  }, [isRecording]);

  useEffect(() => {
    if (chunks.length) {
      const videoChunks = chunks.filter(chunk => chunk.type.includes("video"));
      const videoBlob = new Blob(videoChunks, { type: "video/webm" });
      const videoURL = window.URL.createObjectURL(videoBlob);
      setVideoURL(videoURL);
    }
  }, [chunks]);

  if (!isMounted)
    return (
      <div className='text-2xl font-medium text-blue-400 animate-pulse'>
        Loading...
      </div>
    );

  return (
    <>
      <h1 className='text-2xl xl:text-3xl font-medium mb-4'>Rekam Dirimu</h1>
      {/*fitur ini hanya bisa diakses di browser chrome*/}
      {!browserSupportsSpeechRecognition && (
        <p className='text-red-500'>
          Fitur Speech To Text saat ini hanya bisa diakses di browser chrome
        </p>
      )}
      <div className='flex items-center flex-col gap-y-6 mt-12'>
        {videoURL && (
          <video src={videoURL} controls className='rounded-2xl w-4/5' />
        )}
        {/*create preview*/}
        <video
          ref={videoRef}
          muted
          className={!videoURL ? "block rounded-2xl w-4/5" : "hidden"}
        />
        <div className='flex items-center gap-x-4'>
          {isRecording ? (
            <button onClick={handleStopClick}>
              <Image
                src='/image-assets/stop-record.svg'
                width={50}
                height={50}
                alt='stop'
              />
            </button>
          ) : (
            <button disabled={!cameraStart} onClick={handleRecordClick} className="disabled:cursor-not-allowed">
              <Image
                src='/image-assets/record.svg'
                width={50}
                height={50}
                alt='record'
              />
            </button>
          )}
          {cameraStart && (
            <button
              onClick={handleCameraOffClick}
              className='p-3 bg-red-500 rounded-full'
            >
              <Image
                src='/image-assets/video-off.svg'
                width={30}
                height={30}
                alt='camera-off'
              />
            </button>
          )}
          {!cameraStart && (
            <button
              onClick={handleStartCamera}
              className='p-3 bg-green-300 rounded-full'
            >
              <Image
                src='/image-assets/video-on.svg'
                width={30}
                height={30}
                alt='camera-off'
              />
            </button>
          )}
          <button className="p-2 rounded-full bg-slate-200 disabled:cursor-not-allowed" disabled={!transcript}>
            <Image
              src='/image-assets/analysis.svg'
              width={40}
              height={40}
              alt='analysis'
            />
          </button>
        </div>
        {transcript && <p>transkrip: {transcript}</p>}
      </div>
    </>
  );
}
