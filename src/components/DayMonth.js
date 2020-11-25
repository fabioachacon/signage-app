import React, {useState, useEffect} from 'react';



const DayMonth = () => {
    let timerId;
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    const [currentDay, setCurrentDay] =  useState({
        day: '',
        month: ''
    });

    const getCurrentDay = () => {
        if (timerId) clearInterval(timerId);

        const date = new Date();
        const day = checkTime(date.getUTCDate());
        const month = checkTime(date.getUTCMonth());

        const dayName = days[date.getDay()];
        const dayMonth = [day, month].join('/');

        setCurrentDay({...currentDay, day: dayName, month: dayMonth});
    }

    const checkTime = (time) => { 
        if (time < 10) {time = "0" + time};
        return time;
    }

    const upDateDay = () => {
        timerId = setInterval(getCurrentDay, 60000 * 30);
    }

     useEffect(() => {
        getCurrentDay();
     }, []);
    

    return(
        <div className="day-Month">
            {upDateDay()}
            <p className="day">{currentDay.day}</p>
            <p className="month">{currentDay.month}</p>
        </div>

    )
}

export default DayMonth;