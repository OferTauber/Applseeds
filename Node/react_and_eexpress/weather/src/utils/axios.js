import axios from 'axios';

// const URL = '127.0.0.1:8080';
const URL = 'http://localhost:5000';

const getWeather = async ({ lat, lon }) => {
  const weather = await axios.get(URL, {
    params: {
      lat: lat + '',
      lon: lon + '',
    },
  });

  return weather.data;
};

export default getWeather;
