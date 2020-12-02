import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Weather = () => {

    let timerId;
    const WEATHER_API = 'http://api.weatherapi.com/v1/current.json?key=0cfd418c18074b0b8d5230736201611&q=Joao Pessoa';
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    
    //States
    const [weather, setWeather] = useState({
        temperature: '',
        icon: ''
    });

    const getWeatherAPI = () => {

       if(timerId) clearTimeout(timerId);

        axios.get(PROXY_URL+WEATHER_API)
             .then(data => {
                 if(data) {
                    const temperature = data.data.current.temp_c+"°";
                    const icon = `http://${data.data.current.condition.icon}`;
                    
                    setWeather({...weather, temperature: temperature, icon: icon });
                   
                }
             })
             .catch(error => console.error(error));
        
        timerId = setTimeout(getWeatherAPI, 60000 * 25);
    }

    useEffect(() => {
        getWeatherAPI();
    }, []);


    return (
        <div className='Weather'>
            <div className="icon-wrapper">
               <img src={weather.icon} alt="icon" />
            </div>
           <div className="tempereture">{weather.temperature}</div>
        </div>
    )
}

export default Weather;