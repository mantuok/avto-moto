import {nanoid} from 'nanoid';

export const autos = [
  {
    id: 1,
    name: `Марпех 11`,
    newPrice: `2 300 000 ₽`,
    oldPrice: `2 400 000 ₽`,
    transmission: `Роботизированная`,
    power: `249`,
    type: `Бензиновый`,
    wheelsDrive: `Полный`,
    size: `2.4`,
    torque: `370/4500`,
    cyllinders: `4`,
    photos: [
      {
        id: nanoid(),
        alt: `Внешний вид автомобиля`,
        full: `./img/slider-exterior.jpg`,
        thumbnail: `./img/thumbnail-exterior.jpg`
      },
      {
        id: nanoid(),
        alt: `Салон автомобиля`,
        full: `./img/slider-interior.jpg`,
        thumbnail: `./img/thumbnail-interior.jpg`
      },
      {
        id: nanoid(),
        alt: `Приборная панель автомобиля`,
        full: `./img/slider-speed.jpg`,
        thumbnail: `./img/thumbnail-speed.jpg`
      }
    ]
  }
];