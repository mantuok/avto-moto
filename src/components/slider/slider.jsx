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
      <div className="slider__thumbnails-wrapper">
        <button className="slider__button slider__button--previous-active"><span className="visually-hidden">Назад</span></button>
        <div className="slider__thumbnails">
          {renderImageList(ImageType.THUMBNAIL.name)}
        </div>
        <button className="slider__button slider__button--next-active"><span className="visually-hidden">Вперед</span></button>
      </div>
    </section>
  )
}

export default Slider;