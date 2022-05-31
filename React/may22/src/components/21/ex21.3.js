import React from 'react';
import { useState } from 'react';

const EX21_1 = () => {
  const [flowersColor, setFlowersColor] = useState(false);
  const [pandaColor, setPandasColor] = useState(false);

  const toogleState = (setterCallback) => {
    setterCallback((prev) => !prev);
  };

  return (
    <div>
      <img
        src={require(`./assets/flowers-${flowersColor ? 'c' : 'b'}.jpg`)}
        alt="NO!"
        onMouseEnter={() => toogleState(setFlowersColor)}
        onMouseLeave={() => toogleState(setFlowersColor)}
      />
      <img
        src={require(`./assets/panda-${pandaColor ? 'c' : 'b'}.jpg`)}
        alt="NO!"
        onMouseEnter={() => toogleState(setPandasColor)}
        onMouseLeave={() => toogleState(setPandasColor)}
      />
    </div>
  );
};

export default EX21_1;
// mouseenter
