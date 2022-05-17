import btn from './button';

const ex4_1 = () => {
  return (
    <div>
      {btn('important', 'bold')}
      {btn('not important', 'normal')}
    </div>
  );
};

export default ex4_1;
