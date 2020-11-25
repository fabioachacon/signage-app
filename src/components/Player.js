import React, {useRef, useState} from 'react';
import {videos} from '../data'

const Player = ({
    videoRef, 
    isPlaying, 
    setIsPlaying, 
    currentVideo, 
    setCurrentVideo
}) => {

    const songEndHandler = async () => {
        let currentIndex = videos.findIndex((video) => video.id === currentVideo.id);
        let video = videos[(currentIndex + 1) % videos.length];
        await setCurrentVideo(video);
        if (isPlaying) videoRef.current.play();
    }

    return(
        <div className="video">
           <div className="video-container">
               <video 
               src={currentVideo.video} 
               onEnded={songEndHandler}
               controls
               autoPlay={true} 
               ref={videoRef}>
               </video>
           </div>
        </div>
    )
}

export default Player