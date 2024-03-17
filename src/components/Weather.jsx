
import React from "react";
import { useEffect, useState } from "react";
import '../styles/Weather.css';
import windImage from '../img/wind.png';
import humidityImage from '../img/humidity.png';
import search from '../img/free-icon-loupe-622669.png';


function Weather(props){
    
    const [city, setCity] = useState('Gomel');
    const [weatherData, setWeatherData] = useState();

    const fetchData = async () => {
        try{
            let resp = await fetch(`http://api.weatherapi.com/v1/current.json?key=${props.apiKey}&q=${city}`);
            if(!resp.ok)
                throw new Error('Network response was not ok');
            let data = await resp.json();
            setWeatherData(data);
        } catch(err){
            alert(err);
        }
    }

    useEffect(() => fetchData, []);


    return(
        weatherData && 
        (
            <div className={`main ${weatherData.current.is_day ? 'day' : 'night'}`}>
                <h1>Weather App</h1>
                
                <br/>

                <div className="search">
                    <input
                        type="text"
                        placeholder="Enter city"
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button onClick={fetchData}>
                        <img src={search}/>
                    </button>
                </div>

                <br />
                <div className="weatherToday">
                        <h2>{weatherData.location.name}</h2>
                        <img src={weatherData.current.condition.icon} 
                        alt={weatherData.current.condition.text} 
                        style={{ width: '128px', height: 'auto', borderRadius: '15px', imageRendering: 'auto'}} />
                        <h2>{weatherData.current.temp_c}°C</h2>
                        <div className="otherInfo">
                            <div>
                                <img className="icons" src={windImage} />
                                <span>{weatherData.current.humidity} %</span>
                            </div>
                            <div>
                                <img className="icons" src={humidityImage} />
                                <span>{weatherData.current.wind_kph} km/h, {weatherData.current.wind_dir}</span>
                            </div>
                        </div>
                    </div>


            </div>
        )
    );
}

export default Weather;
