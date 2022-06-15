const axios = require('axios');
const KEY = 'e1e212ff211f6879a39575c86edcf76b';
const EXCLUDE = 'hourly,daily,minutely,alerts';
const URL = 'https://api.openweathermap.org/data/2.5/onecall';
const CELSIUS_DEGREES = -272;

const fetchWeatherFromOpenweather = async (lat, lon) => {
  try {
    const data = await axios.get(URL, {
      params: {
        lat,
        lon,
        exclude: EXCLUDE,
        appid: KEY,
      },
    });

    const { temp, humidity, wind_speed } = await data.data.current;
    const celsius = temp * 1 + CELSIUS_DEGREES;

    return { temp: celsius.toFixed(2) + ' C', humidity, wind_speed };
  } catch (e) {
    console.warn(e);
  }
};

module.exports = fetchWeatherFromOpenweather;
