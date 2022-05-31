import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EX20_1 = () => {
  const [displayData, setDisplayData] = useState('false');

  const toggeleData = () => {
    setDisplayData((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggeleData}>Toggle Data</button>
      {displayData && <Data />}
    </div>
  );
};

export default EX20_1;

const Data = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const getData = async () => {
      const fechedData = await axios.get(
        'http://go-vegan.co.il/API2.0/meals.php?lat=32.0731082&lng=34.7805689&radius=5000&address=הוברמן+18%2C+תל+אביב-יפו&version=4&uuid=563909759323956&_=1653936882606'
      );
      setData(JSON.stringify(fechedData.data));
    };

    getData();

    return () => {
      setData('');
    };
  }, []);

  return <p>{data}</p>;
};
