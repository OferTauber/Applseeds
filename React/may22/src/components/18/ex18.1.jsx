import React from 'react';

const EX18_1 = ({ text, length }) => {
  const [displpayFull, setDisplayFull] = React.useState(false);

  const toogleText = () => {
    setDisplayFull((prev) => !prev);
  };

  const shortVersion = (text, length) => {
    return text.split(' ').slice(0, length).join(' ');
  };

  return (
    <div>
      <p>
        {displpayFull ? text : shortVersion(text, length)}
        <span style={{ color: 'blue', cursor: 'pointer' }} onClick={toogleText}>
          {' '}
          {displpayFull ? 'Show less' : '... Read more'}
        </span>
      </p>
    </div>
  );
};

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime nihil maiores quisquam at eaque eum possimus, autem quo, ducimus sit cupiditate? Error accusantium sunt beatae accusamus dolorum aut minima.';

export { EX18_1, text };
