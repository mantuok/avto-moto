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
}