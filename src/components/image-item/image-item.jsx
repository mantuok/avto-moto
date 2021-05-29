import React from 'react';
import classnames from 'classnames';
import {ImageType} from '../../const';

const ImageItem = (props) => {
  const {type, image} = props;

  const imageItemClass = classnames(
    {"slider__slide": type === ImageType.FULL.name},
    {"slider__thumbnail": type === ImageType.THUMBNAIL.name}
  )

  return (
    <img 
      className={imageItemClass}
      src={image[type]}
      alt={image.ALT}
      width={ImageType[type].width}
      height={ImageType[type].height}
    /> 
  )
};

export default ImageItem;