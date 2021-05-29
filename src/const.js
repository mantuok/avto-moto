import {nanoid} from 'nanoid';

export const NavigationItem = {
  header: {
    Auto: {
      ID: nanoid(),
      NAME: `Автомобили`,
      URL: `#`
    },
    Contacts: {
      ID: nanoid(),
      NAME: `Контакты`,
      URL: `#`
    },
    Services: {
      ID: nanoid(),
      NAME: `Услуги`,
      URL: `#`
    },
    Vacancies: {
      ID: nanoid(),
      NAME: `Вакансии`,
      URL: `#`
    }
  },
  footer: {
    Corporate: {
      ID: nanoid(),
      NAME: `Корпоративным клиентам`,
      URL: `#`
    },
    Clients: {
      ID: nanoid(),
      NAME: `Клиентам`,
      URL: `#`
    },
    CarRental: {
      ID: nanoid(),
      NAME: `Аренда авто`,
      URL: `#`
    },
    CarSharing: {
      ID: nanoid(),
      NAME: `Каршеринг`,
      URL: `#`
    },
    CarSell: {
      ID: nanoid(),
      NAME: `Как продать авто`,
      URL: `#`
    },
    TradeIn: {
      ID: nanoid(),
      NAME: `Trade-in`,
      URL: `#`
    },
    TestDrive: {
      ID: nanoid(),
      NAME: `Test drive`,
      URL: `#`
    },
  }
};

export const NavigationType = {
  HEADER: `header`,
  FOOTER: `footer`
};

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
];

export const ImageType = {
  FULL: {
    name: `FULL`,
    width: `600`,
    height: `375`
  },
  THUMBNAIL: {
    name: `THUMBNAIL`,
    width: `128`,
    height: `80`
  }
};

export const FeatureItem = {
  transmission: {
    ID: nanoid(),
    NAME: `Трансмиссия`,
    VALUE: `Роботизированная`
  },
  power: {
    ID: nanoid(),
    NAME: `Мощность двигателя, л.с.`,
    VALUE: `249`
  },
  type: {
    ID: nanoid(),
    NAME: `Тип двигателя`,
    VALUE: `Бензиновый`
  },
  wheels: {
    ID: nanoid(),
    NAME: `Привод`,
    VALUE: `Полный`
  },
  size: {
    ID: nanoid(),
    NAME: `Объем двигателя, л`,
    VALUE: `2.4`
  },
  torque: {
    ID: nanoid(),
    NAME: `Макс. крутящий момент`,
    VALUE: `370/4500`
  },
  cylinders: {
    ID: nanoid(),
    NAME: `Количество цилиндров`,
    VALUE: `4`
  }
};