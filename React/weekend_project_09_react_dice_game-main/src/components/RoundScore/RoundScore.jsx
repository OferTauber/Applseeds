import './RoundScore.css';
import { context } from '../GameBoard/GameBoard';
import { useContext } from 'react';

const RoundScore = ({ id }) => {
  const roundScore =
    useContext(context)[id ? 'firstRoundScore' : 'secondRoundScore'];

  return <div className="round">CURRENT: {roundScore}</div>;
};

export default RoundScore;
