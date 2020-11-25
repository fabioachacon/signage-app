import React, {useState, useRef} from 'react';
import './styles/app.scss';
import Player from './components/Player';
import BlackBar from './components/BlackBar';
import {videos} from './data';

function App() {

  const videoRef = useRef();
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="App">
      <Player 
      videoRef={videoRef}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentVideo={currentVideo}
      setCurrentVideo={setCurrentVideo}
      
      />
      <BlackBar />
    </div>
  );
}

export default App;