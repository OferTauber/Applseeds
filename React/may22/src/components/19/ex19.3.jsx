import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EX19_3 = () => {
  const [apiData, setData] = useState([]);
  const [term, setTerm] = useState('hooks');

  const mapData = () => {
    return apiData.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.url}>{item.title}</a>{' '}
        </li>
      );
    });
  };

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${term}`
      );
      setData(fetchedData.data.hits);
    };

    getData();
  }, [term]);

  return (
    <div>
      {!apiData && <h2>Loading...</h2>}
      {apiData && (
        <>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <ul>{mapData()}</ul>
        </>
      )}
    </div>
  );
};

export default EX19_3;
