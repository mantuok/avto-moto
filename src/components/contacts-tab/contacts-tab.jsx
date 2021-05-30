import React from 'react';

const ContactsTab = () => {
  return (
    <section className="detailed-info__contacts contacts">
      <div className="contacts__description">
        <h3 className="contacts__heading">Адрес</h3>
        <p className="contacts__contact contacts__contact--address">Санкт-Петербург, набережная реки Карповки, дом 5</p>
        <h3 className="contacts__heading">Режим работы</h3>
        <p className="contacts__contact contacts__contact--work-hours">Ежедневно, с 10:00 до 21:00</p>
        <h3 className="contacts__heading">Телефон</h3>
        <a className="contacts__contact contacts__contact--tel" href="tel:88003335599">8 (800) 333-55-99</a>
        <h3 className="contacts__heading">E-mail</h3>
        <a className="contacts__contact contacts__contact--email" href="info@avto-moto.ru">info@avto-moto.ru</a>
      </div>
      <div className="contacts__map">
        <img src="../img/contacts-map.jpg" width="431" height="271" alt="Санкт-Петербург, набережная реки Карповки, дом 5" />
      </div>
    </section>
  )
}

export default ContactsTab;