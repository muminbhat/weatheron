import React, { useEffect, useState } from 'react';
import './weather.css';

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
let time = d.toLocaleTimeString();

const Weatherapp = () => {

    const [city, setCity] = useState("Srinagar")
    const [search, setSearch] = useState("Srinagar")
    const [country, setCountry] = useState("IN")
    // const [description, setDescription] = useState("Sunny")
    // const [speed, setSpeed] = useState("6.2 km/h")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9a15eee34aa8c56cb15c7bbbfe2cd552`
            const response = await fetch(url)
            const resJson = await response.json();
            setCity(resJson.main);
            setCountry(resJson.sys);
            // setDescription(resJson.weather);
            // setSpeed(resJson.wind);
            // console.log(setDescription);

        }
        fetchApi();
    }, [search]);

    return (
        <>

            <div className="card-box">
                <div className="search_icon">
                    <input type="text" className="search-bar" placeholder="Search" id="searchTxt" onChange={(event) => { setSearch(event.target.value) }} />
                    <button className="button_icon">
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                        </svg>
                    </button>
                </div>
                {!city ? (
                    <p>
                        No Data Found
                    </p>
                ) : (

                    <div name="weather">
                        <div className="city" id="location">{search}</div>
                        <div className="day" id="locationParts">{country.country}</div>
                        <div className="day">
                            <p id="dateTime"></p>
                            <p>{time}  | </p>
                            <p id="weekDay">{' ' + day}</p>
                        </div>
                        <div className="wheather">
                            {/* <h1 className="temp" id="temperatureC"></h1> */}
                            <h1>{city.main}</h1>
                            <h1 id="temperatureF">{city.temp}°C</h1>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/cloudy-weather-11-1147979.png" alt="" className="icon" id="weatherIcon" />
                            
                        </div>
                        <div className="description" id="txtWord">Sunny</div>
                        <div className="humidity" id="humidity">Humidity: {city.humidity}%</div>
                        <div className="precipitation" id="precipitation">Feels Like: {city.feels_like}°C</div>
                        <div className="wind" id="wind">Maximum: {city.temp_max}°C</div>
                        <div className="wind" id="wind">Minimum: {city.temp_min}°C</div>
                    </div>
                )
                }
            </div>


        </>
    )
}

export default Weatherapp;