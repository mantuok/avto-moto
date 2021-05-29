import React, {useState} from 'react';
import {
  sliderImages,
  ImageType
} from '../../const';
import ImageItem from '../image-item/image-item';

const Slider = () => {
  const [activeSlideImage, setActiveSlideImage] = useState({
    id: sliderImages[0].ID
  })

  const changeActiveSlide = (selectedImage) => {
    setActiveSlideImage({
      ...activeSlideImage,
      id: selectedImage
    })
  }

  const renderThumbnailsList = () => {
    return sliderImages.map((image) => {
      return <ImageItem 
        key={image.ID} 
        type={ImageType.THUMBNAIL.name}
        image={image}
      /> 
    })
  }

  const renderSlideImage = () => {
    const selectedSlideImage = sliderImages.find((image) => image.ID === activeSlideImage.id);
    return <ImageItem 
      key={selectedSlideImage.ID} 
      type={ImageType.FULL.name}
      image={selectedSlideImage}
    /> 
  }

  return (
    <section className="main__slider slider">
      <div className="slider__slides">
        {renderSlideImage()}
      </div>
      <div className="slider__thumbnails-wrapper">
        <button className="slider__button slider__button--previous-active"><span className="visually-hidden">Назад</span></button>
        <div className="slider__thumbnails">
          {renderThumbnailsList()}
        </div>
        <button className="slider__button slider__button--next-active"><span className="visually-hidden">Вперед</span></button>
      </div>
    </section>
  )
}

export default Slider;