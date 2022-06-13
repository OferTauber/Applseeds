const axios = require('axios');
const https = require('https');
const fetch = require('node-fetch');
const URL = 'https://api.kanye.rest';

const getQuteUsingAxios = async () => {
  try {
    const qoute = await axios.get(URL);
    console.log('Qute fetched using axios:');
    console.log(qoute.data.quote);
  } catch (e) {
    console.log("Error from 'getQuteUsingAxios'");
    console.warn(e);
  }
};

const getQuteUsingFetch = async () => {
  try {
    const data = await fetch(URL);
    const _json = await data.json();
    console.log('Qute fetched using Node-Fetch:');
    console.log(_json.quote);
  } catch (e) {
    console.log("Error from 'getQuteUsingFetch'");
    console.warn(e);
  }
};

const getQuteUsingHttp = () => {
  https
    .get(URL, (response) => {
      let data = '';

      response.on('data', (chank) => {
        data += chank;
      });

      response.on('end', () => {
        const dataObj = JSON.parse(data);
        console.log('Qute fetched using https:');
        console.log(dataObj.quote);
      });
    })
    .on('error', (err) => {
      console.log("Error from 'getQuteUsingHttp'");
      console.error(err);
    });
};

getQuteUsingAxios();
getQuteUsingHttp();
getQuteUsingFetch();
