import React from 'react';

const Btn = ({ text, fontWeight }) => {
  return <button style={{ fontWeight: fontWeight }}> {text}</button>;
};

export default Btn;
