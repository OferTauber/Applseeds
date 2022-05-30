import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EX19_1 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await axios.get('https://swapi.dev/api/films/1/');
      const { title, director } = fetchedData.data;
      setData({ title, director });
    };

    getData();
  }, []);

  return (
    <div>
      <h2>{'Title: ' + data.title || 'loading...'}</h2>
      <h2>{'Director: ' + data.director || ''}</h2>
    </div>
  );
};

export default EX19_1;
