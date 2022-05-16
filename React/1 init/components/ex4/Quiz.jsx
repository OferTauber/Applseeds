import QuizTitle from './QuizTitle';
import Q1 from './Q1';
import Q2 from './Q2';

const Quiz = (
  <div style={{ height: '300px', width: '400px', border: '3px solid black' }}>
    {QuizTitle}
    {Q1}
    {Q2}
  </div>
);

export default Quiz;
