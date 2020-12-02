import React, { useState, useRef, useEffect} from 'react';
import './styles/app.scss';
import Player from './components/Player';
import BlackBar from './components/BlackBar';
import {getData} from './data';
import {useDispatch, useSelector} from 'react-redux';
import {loadDocuments} from './actions/dataAction';

function App() {

  const dispatch = useDispatch();
    
  useEffect(() => {
  dispatch(loadDocuments())

  }, [dispatch]);

  const {documents} = useSelector((state) =>  state.data);
  console.log(documents)

  const videoRef = useRef();
  const [videos, setVideos] = useState(documents);
  const [currentVideo, setCurrentVideo] = useState(videos[1]);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="App">
        <Player 
          videoRef={videoRef}
          setVideos={setVideos}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentVideo={currentVideo}
          videos={videos}
          setCurrentVideo={setCurrentVideo}
      />
      <BlackBar />
    </div>
  );
}

export default App;