import React, { useContext } from 'react';
import './Input.css';
import { context, callbaccksContext } from '../GameBoard/GameBoard';

const Input = () => {
  const { targetScore, gameStarted } = useContext(context);
  const { handleInputChange } = useContext(callbaccksContext);
  return (
    <input
      type="text"
      value={targetScore}
      onChange={handleInputChange}
      style={{
        visibility: `${gameStarted}` === 'false' ? 'visible' : 'hidden',
      }}
    />
  );
};

export default Input;
