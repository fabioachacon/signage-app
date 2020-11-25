import React, { useState } from 'react';
import Weather from './Weather';
import DayMonth from './DayMonth';
import StockPrice from './StockPrice';
import Time from './Time';


const BlackBar  = () => {
  
    return(
        <div className="bar">
           <div className="time">
             <Time />
           </div>
           <div className="weather-day">
             <DayMonth />
             <Weather />
           </div>
           <div className="stockPrice">
             <StockPrice />
           </div>
           <div className="logo">
             LOGO
           </div>
        </div>
    )
}

export default BlackBar;