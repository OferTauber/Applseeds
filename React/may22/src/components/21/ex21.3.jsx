import React from 'react';
import { useRef } from 'react';

const EX21_1 = () => {
  return (
    <div>
      <Image
        bwUrl={require(`./assets/flowers-b.jpg`)}
        colorUrl={require(`./assets/flowers-c.jpg`)}
      />
      <Image
        bwUrl={require(`./assets/panda-b.jpg`)}
        colorUrl={require(`./assets/panda-c.jpg`)}
      />
    </div>
  );
};

export default EX21_1;

const Image = ({ bwUrl, colorUrl }) => {
  const imageRef = useRef(null);

  const onHover = (ref) => {
    ref.current.src = colorUrl;
  };
  const onUnHover = (ref) => {
    ref.current.src = bwUrl;
  };

  return (
    <img
      src={bwUrl}
      alt=""
      ref={imageRef}
      onMouseEnter={() => onHover(imageRef)}
      onMouseLeave={() => onUnHover(imageRef)}
    />
  );
};
