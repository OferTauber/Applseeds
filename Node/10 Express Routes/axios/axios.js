const axios = require('axios');
const URL = 'localhost:3000/numbers';

const newNum = {
  number: 3,
  name: 'Three',
};

// axios.post('localhost:3000', newNum);

const get = async () => {
  try {
    const data = await axios.get('localhost:3000/');
    console.log(data);
  } catch (e) {
    console.warn(e);
  }
};

get();
