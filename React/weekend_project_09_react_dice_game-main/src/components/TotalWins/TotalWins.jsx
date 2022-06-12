import React, { useContext } from 'react';
import './TotalWins.css';
import { context } from '../GameBoard/GameBoard';

const TotalWins = ({ id }) => {
  const wins = useContext(context).totalWins;
  return <div className="wins">WINS: {wins[id]}</div>;
};

export default TotalWins;
