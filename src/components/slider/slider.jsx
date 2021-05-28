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
        {/* {renderImageList(ImageType.FULL.name)} */}
        <ImageItem 
          key={SliderImage.image1.ID} 
          type={ImageType.FULL.name}
          image={SliderImage.image1}
        /> 
      </div>
      <div className="slider__thumbnails">
        <button className="slider__previous">Назад</button>
        {renderImageList(ImageType.THUMBNAIL.name)}
        <button className="slider__next">Вперед</button>
      </div>
    </section>
  )
}

export default Slider;