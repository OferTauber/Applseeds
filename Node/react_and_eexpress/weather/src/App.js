import './App.css';
import getWeather from './utils/axios';
import { useState, useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({
    lat: undefined,
    lon: undefined,
  });

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(async (possition) => {
      const lat = await possition.coords.latitude.toFixed(2);
      const lon = await possition.coords.longitude.toFixed(2);
      setLocation({ lat, lon });
    });
  }, []);

  useEffect(() => {
    const handelLocation = async (location) => {
      const loaclWeather = await getWeather(location);
      setWeather(loaclWeather);
    };
    handelLocation(location);
  }, [location]);

  if (!location.lat) return <AwiteForUser />;
  if (!weather.temp) return <Spinner />;

  return (
    <div className="App">
      <h2>Weather at your current location:</h2>
      <p>Temp: {weather.temp}</p>
      <p>Wind speed: {weather.wind_speed} km/h</p>
      <p>Humidity: {weather.humidity}%</p>
    </div>
  );
}

export default App;

const Spinner = () => {
  return <h2>Loading...</h2>;
};

const AwiteForUser = () => {
  return <h3>Pleas allow access to yoar location</h3>;
};
