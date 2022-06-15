const express = require('express');
const fetchWeatherFromOpenweather = require('./Axios');
const cors = require('cors');
const PORT = 5000;

const app = express();

const LAT = '32.1';
const LON = '34.85';

app.use(cors());

app.get('/', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const weather = await fetchWeatherFromOpenweather(lat, lon);
    res.status(200).send(weather);
  } catch (e) {
    console.warn(e);
    res.status(400).send(e.massege);
  }
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
