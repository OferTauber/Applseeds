import React from 'react';
import ReactDOM from 'react-dom';
import card from './card';

const ex4_2 = () => {
  return (
    <div>
      {card(
        'https://picsum.photos/200/300',
        'A beutifule place',
        'Random imige i fund on the web'
      )}
      {card(
        'https://picsum.photos/200/301',
        "Mayby somwn's face?",
        'Also random imige i fund on the web'
      )}
      {card(
        'https://picsum.photos/100/100',
        'A beutifule place, i hope',
        'You get the idea...'
      )}
    </div>
  );
};

export default ex4_2;
