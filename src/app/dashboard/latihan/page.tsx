"use client";
import "regenerator-runtime/runtime";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { setCameraStart, setCameraWarning } from "@/store/cameraSlice";
import { motion } from "framer-motion";

export default function Practice() {
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [chunks, setChunks] = useState<Blob[]>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string | null>("");
  const [showWarningBrowser, setShowWarningBrowser] = useState<boolean>(true);
  const [showAccessWarning, setShowAccessWarning] = useState<boolean>(false);

  const cameraWarning = useSelector((state: RootState) => state.stream.warning);
  const cameraStarted = useSelector(
    (state: RootState) => state.stream.cameraStarted
  );
  const dispatch = useDispatch();

  const {
    transcript: currentTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const getVideoStream = useCallback(() => {
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
        dispatch(setCameraStart(true));

        mediaRecorder.ondataavailable = e => {
          setChunks(prev => [...prev, e.data]);
        };

        if (videoRef?.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(err => console.log(err));
        }
      })
      .catch((err: Error) => {
        setShowAccessWarning(true);
        console.log("err", err);
      });
  }, [dispatch]);

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
      dispatch(setCameraStart(false));
    }
  };

  const handleStartCamera = () => {
    if (!stream && !cameraStarted) {
      setChunks([]);
      setVideoURL(null);
      getVideoStream();
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (navigator.mediaDevices) {
      console.log("getUserMedia supported.");
      getVideoStream();
    }

    // show warning if browser not give permission
  }, [getVideoStream]);

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

  const handleCameraWarning = () => {
    dispatch(setCameraWarning(false));
  };

  if (!isMounted)
    return (
      <div className='text-2xl font-medium text-blue-400 animate-pulse'>
        Loading...
      </div>
    );

  return (
    <div className='relative'>
      {cameraWarning && (
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -400 }}
          className='shadow-lg bg-white z-20 flex flex-col border-2 border-red-500 overflow-hidden justify-center absolute text-black rounded-lg w-full'
        >
          <p className='py-2 px-5 font-medium text-lg text-red-600'>Warning!</p>
          <p className='text-center pt-6 pb-8'>
            Sepertinya kamu belum mematikan kamera
          </p>
          <button
            onClick={handleCameraWarning}
            className='bg-red-500 w-full py-2'
          >
            Mengerti
          </button>
        </motion.div>
      )}
      {!browserSupportsSpeechRecognition && showWarningBrowser && (
        <motion.div
          animate={{ y: 0 }}
          initial={{ y: -400 }}
          transition={{ delay: 1 }}
          className='shadow-lg bg-white z-20 flex flex-col border-2 border-yellow-500 overflow-hidden justify-center absolute text-black rounded-lg w-full'
        >
          <p className='py-2 px-5 font-medium text-lg text-yellow-600'>
            Information!
          </p>
          <p className='text-center pt-6 pb-8'>
            Fitur Analisis saat ini hanya bisa diakses di browser chrome
          </p>
          <button
            onClick={() => {
              setShowWarningBrowser(false);
            }}
            className='bg-yellow-500 w-full py-2'
          >
            Mengerti
          </button>
        </motion.div>
      )}
      <h1 className='text-2xl xl:text-3xl font-medium mb-4'>Rekam Dirimu</h1>
      {/*fitur ini hanya bisa diakses di browser chrome*/}

      <div className='flex relative items-center flex-col mt-12'>
        {videoURL && (
          <video src={videoURL} controls className='rounded-2xl w-4/5' />
        )}
        {/*create preview*/}
        <video
          ref={videoRef}
          muted
          className={!videoURL ? "block rounded-2xl w-4/5" : "hidden"}
        />
        {showAccessWarning && (
          <div
            style={{
              aspectRatio: "16/9",
            }}
            className='absolute w-4/5 text-xl flex justify-center items-center bg-gray-200 rounded-2xl'
          >
            Please Allow Access to Your Camera
          </div>
        )}
        {!cameraStarted && !videoURL && (
          <div
            style={{
              aspectRatio: "16/9",
            }}
            className='w-4/5 absolute text-xl flex justify-center items-center bg-gray-200 rounded-2xl'
          >
            Turn On Your Camera
          </div>
        )}

        <div className='flex items-center gap-x-4 mt-12'>
          {cameraStarted && (
            <button
              onClick={handleCameraOffClick}
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
          {!cameraStarted && (
            <button
              onClick={handleStartCamera}
              className='p-3 bg-red-400 rounded-full'
            >
              <Image
                src='/image-assets/video-off.svg'
                width={30}
                height={30}
                alt='camera-off'
              />
            </button>
          )}
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
            <button
              disabled={!cameraStarted}
              onClick={handleRecordClick}
              className='disabled:cursor-not-allowed'
            >
              <Image
                src='/image-assets/record.svg'
                width={50}
                height={50}
                alt='record'
              />
            </button>
          )}

          <button
            className='p-2 rounded-full bg-slate-200 disabled:cursor-not-allowed'
            disabled={!transcript}
          >
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
    </div>
  );
}
