import React from 'react';
import {
  SliderImage,
  ImageType
} from '../../const';
import ImageItem from '../image-item/image-item';

const Slider = () => {

  const imageList = Object.values(SliderImage);

  const renderImageList = (imageType) => {
    return imageList.map((image) => {
      return <ImageItem 
        key={image.ID} 
        type={imageType}
        image={image}
      /> 
    })
  }

  return (
    <section className="main__slider slider">
      <div className="slider__slides">
        {renderImageList(ImageType.FULL.name)}
      </div>
      <div className="slider__thumbnails">
        {renderImageList(ImageType.THUMBNAIL.name)}
      </div>
    </section>
  )
}

export default Slider;