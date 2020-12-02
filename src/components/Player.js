import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadDocuments} from '../actions/dataAction';


const Player = ({
    videoRef, 
    isPlaying, 
    currentVideo, 
    setCurrentVideo,
    setVideos,
    videos

}) => {


    const videoEndHandler = async () => {
        let currentIndex = videos.findIndex((video) => video.id === currentVideo.id);
        let video = videos[(currentIndex + 1) % videos.length];
        await setCurrentVideo(video);
        if (isPlaying) videoRef.current.play();
    }

    return(
        <div className="video">
           <div className="video-container">
           {currentVideo && (
            <video
               src={currentVideo.url}
               onEnded={videoEndHandler}
               controls
               autoPlay={true} 
               ref={videoRef}>
            </video>     
           )}
           </div>
        </div>
    )
}

export default Player