import RoundScore from '../RoundScore/RoundScore';
import TotalScore from '../TotalScore/TotalScore';
import TotalWins from '../TotalWins/TotalWins';
import './Player.css';
import { context } from '../GameBoard/GameBoard';
import { useContext } from 'react';

const Player = ({ id }) => {
  const { turn } = useContext(context);
  return (
    <div id="player" className={turn === id ? `current${id}` : ''}>
      <div className="top">
        <p>{`PLAYER ${id}`}</p>
        <TotalScore id={id} />
      </div>
      <RoundScore id={id} />
      <TotalWins id={id} />
    </div>
  );
};

export default Player;
