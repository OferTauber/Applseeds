import React from 'react';
import Card from './card';

const ex4_2 = () => {
  return (
    <div>
      <Card
        img="https://picsum.photos/200/150"
        title="Earth"
        desc="The planth we live on"
      />
      <Card
        img="https://picsum.photos/201/150"
        title="Things"
        desc="I like to think of"
      />
      <Card
        img="https://picsum.photos/202/150"
        title="Random image"
        desc="I found online"
      />
    </div>
  );
};

export default ex4_2;
