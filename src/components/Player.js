import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadDocuments} from '../actions/dataAction';


const Player = ({
    videoRef
}) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
    dispatch(loadDocuments())
  
    }, [dispatch]);

    const [index, setIndex] = useState(1);
    const {documents, isLoading} = useSelector((state) =>  state.data);

    const videoEndHandler = () => {
        let currentIndex = (index + 1) % documents.length;
        currentIndex =  currentIndex ? currentIndex : currentIndex + 1;
        setIndex(currentIndex);
    }

    return(
        <div className="video">
           <div className="video-container">       
          { !isLoading && (<video
               src={documents[index].url}
               onEnded={videoEndHandler}
               autoPlay={true} 
               ref={videoRef}>
            </video>   
            )} 
           </div>
        </div>
    )
}

export default Player