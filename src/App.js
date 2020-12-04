import React, { useState, useRef, useEffect} from 'react';
import './styles/app.scss';
import Player from './components/Player';
import BlackBar from './components/BlackBar';
import {getData} from './data';
import {useDispatch, useSelector} from 'react-redux';
import {loadDocuments} from './actions/dataAction';

function App() {


  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);


  return (
    <div className="App">
        <Player 
          videoRef={videoRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
      />
      <BlackBar />
    </div>
  );
}

export default App;