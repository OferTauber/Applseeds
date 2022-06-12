import React, { useContext } from 'react';
import { context } from '../GameBoard/GameBoard';
import './Dice.css';

const Dice = ({ id }) => {
  const state = useContext(context);

  return <div className={`dice dice-${state.diceArr[id]}`}></div>;
};

export default Dice;
