import './TotalScore.css';
import { context } from '../GameBoard/GameBoard';
import { useContext } from 'react';

const TotalScore = ({ id }) => {
  const totalScore =
    useContext(context)[id ? 'firstTotalScore' : 'secondTotalScore'];
  return <div className="total">TOTAL: {totalScore}</div>;
};

export default TotalScore;
