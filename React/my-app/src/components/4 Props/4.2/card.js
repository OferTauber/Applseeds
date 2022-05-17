import React from 'react';

const card = (img, title, description) => {
  return (
    <div style={{ height: '150px', width: '120px' }}>
      <img src={img} style={{ width: '100%', height: '50%' }} />
      <h5 style={{ fontSize: '16px', margin: '2px' }}>{title}</h5>
      <p style={{ fontSize: '10px', margin: '2px' }}>{description}</p>
      <span style={{ fontSize: '10px', margin: '5px' }}>
        <a>SHARE</a>
        <p> </p>
        <a>EXPLORE</a>
      </span>
    </div>
  );
};

export default card;
