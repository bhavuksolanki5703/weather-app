import React, { useState, useEffect } from 'react';
import config from './config';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.apiKey}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main } = weatherData;

  return (
    <div>
      <h2>Weather in {name}</h2>
      <p>Temperature: {main.temp} K</p>
      <p>Humidity: {main.humidity} %</p>
    </div>
  );
};

export default Weather;
