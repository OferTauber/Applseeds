import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Ex19_4 = () => {
  const [categoris, setCategoris] = useState([]);
  const [joke, setJoke] = useState('');

  const getJoke = async (category) => {
    let url = 'https://api.chucknorris.io/jokes/random';
    if (category) url += '?' + category;

    const fetchedData = await axios.get(url);
    setJoke(fetchedData.data.value);
  };

  const getData = async () => {
    try {
      const fetchedData = await axios.get(
        'https://api.chucknorris.io/jokes/categories'
      );
      setCategoris(fetchedData.data);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <button onClick={() => getJoke(null)}>Random Joke</button>
      <br />
      <br />
      <Categories list={categoris} callback={getJoke} />
      <div>
        <p>{joke}</p>
      </div>
    </div>
  );
};

export default Ex19_4;

const Categories = ({ list, callback }) => {
  const mapData = (data) => {
    return data.map((category, index) => {
      return (
        <button key={index} onClick={() => callback(category)}>
          {category}{' '}
        </button>
      );
    });
  };

  if (list.length === 0) return <h2>Loading...</h2>;

  return <>{mapData(list)}</>;
};
