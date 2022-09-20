import React, { useRef } from 'react'

function MediaPlayer() {
    const videoRef = useRef();
    const handlePlay = () => {
        const video = videoRef.current;
        video.play();
    }
  return (
    <div>
        <video width="400" ref={videoRef}>
            <source src='videos/aprender.mp4' type='video/mp4'/>
        </video>
        <button onClick={handlePlay}>
            Play 
        </button>
    </div>
  )
}

export { MediaPlayer };