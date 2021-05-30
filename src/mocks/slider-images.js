import {nanoid} from 'nanoid';

export const sliderImages = [
  {
    ID: nanoid(),
    ALT: `Внешний вид автомобиля`,
    FULL: `./img/slider-exterior.jpg`,
    THUMBNAIL: `./img/thumbnail-exterior.jpg`
  },
  {
    ID: nanoid(),
    ALT: `Салон автомобиля`,
    FULL: `./img/slider-interior.jpg`,
    THUMBNAIL: `./img/thumbnail-interior.jpg`
  },
  {
    ID: nanoid(),
    ALT: `Приборная панель автомобиля`,
    FULL: `./img/slider-speed.jpg`,
    THUMBNAIL: `./img/thumbnail-speed.jpg`
  }
]