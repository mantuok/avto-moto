import React from 'react';
import {ImageType} from '../../const';

const ImageItem = (props) => {
  const {type, image} = props;

  return (
    <img 
      src={image[type]}
      alt={image.ALT}
      width={ImageType[type].width}
      height={ImageType[type].height}
    /> 
  )
};

export default ImageItem;