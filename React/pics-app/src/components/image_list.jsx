import React from 'react';

const ImageList = ({ images }) => {
  const imagesList = images.map((image, index) => {
    return <img src={image.urls.regular} alt="my_image" key={index} />;
  });

  return <div>{imagesList}</div>;
};

export default ImageList;
