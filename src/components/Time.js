import React, {useState, useEffect} from 'react';
import {checkTime} from '../utils';

const Time = () => {
    let interval;

    const getTime = (time) => {
        let hour =  time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        hour = checkTime(hour);
        minutes = checkTime(minutes);
        seconds = checkTime(seconds);
        const currentHour = [hour, minutes].join(':');
        return currentHour;
    } 

    // States
    const [currentTime, setCurrentTime] = useState(getTime(new Date()));

    const upDateTime = () => {
        interval = setInterval(() => {
            setCurrentTime(getTime(new Date()))
        }, 1000)
    }

    useEffect(() => {
        upDateTime();
    }, []);

    return (
        <div>
           {currentTime}
        </div>
    )

}

export default Time;