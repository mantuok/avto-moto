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

export const SliderImage = {
  image1: {
    ID: nanoid(),
    ALT: `Внешний вид автомобиля`,
    FULL: `./img/slider-exterior.jpg`,
    THUMBNAIL: `./img/thumbnail-exterior.jpg`
  },
  image2: {
    ID: nanoid(),
    ALT: `Салон автомобиля`,
    FULL: `./img/slider-interior.jpg`,
    THUMBNAIL: `./img/thumbnail-interior.jpg`
  },
  image3: {
    ID: nanoid(),
    ALT: `Приборная панель автомобиля`,
    FULL: `./img/slider-speed.jpg`,
    THUMBNAIL: `./img/thumbnail-speed.jpg`
  }
};

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