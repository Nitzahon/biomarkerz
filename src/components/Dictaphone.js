import React, { useCallback } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Dictaphone = ({dataTrans}) => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  const handleReset = useCallback(() => {
    resetTranscript();
    dataTrans(transcript)
  }, [transcript, dataTrans, resetTranscript]);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }else{
    SpeechRecognition.startListening({
      continuous:true, 
      language: 'he'
    });
  }
  

  return (
    <div>
      {/* <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
      <button onClick={handleReset}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone