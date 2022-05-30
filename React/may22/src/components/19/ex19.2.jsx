import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EX19_2 = () => {
  const [data, setData] = useState([]);
  const [filterdData, setFiltersData] = useState([]);

  const [term, setTerm] = useState('');

  const mapData = () => {
    return filterdData.map((country, index) => {
      return <li key={index}>{country}</li>;
    });
  };

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await axios.get('https://restcountries.com/v3.1/all');
      setData(fetchedData.data.map((country) => country.name.common).sort());
      setFiltersData([...data]);
    };

    getData();
  }, []);

  useEffect(() => {
    setFiltersData(
      data.filter((item) => {
        if (!term) return true;
        const low = item.toLowerCase();
        const lowTerm = term.toLowerCase();
        low.startsWith(lowTerm);
      })
    );
  }, [term]);

  return (
    <div>
      {!data[0] && <h2>Loading...</h2>}
      {data && (
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

export default EX19_2;
