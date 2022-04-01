import React from "react";

import './Form.css';

export const Form = () => {
  return (
    <div className="form">
      <h2 className="form__title">Заповнiть форму</h2>
      <div className="form__buttons">
        <button type="button" className="buttons__button-individual">Фiз. особа</button>
        <button type="button" className="buttons-button-entity">Юр. особа</button>
      </div>

      <div className="form__input input">
        <div className="input__individual individual">
          <div className="individual__person-data">
            <div className="individual__name-container">
              <p className="individual__name">Ім'я</p>
              <input type="text" className="individual__input"/>
            </div>
            <div className="individual__surename-container">
              <p className="individual__surename">Фамiлiя</p>
              <input type="text" className="individual__input"/>
            </div>
          </div>

          <div className="individual__company">
            <div className="individual__company-container">
                <p className="individual__company-name">Назва компанії, організації</p>
                <input type="text" className="individual__input"/>
              </div>
          </div>

          <div className="individual__email">
            <div className="individual__email-container">
                <p className="individual__email-name">Email-адрес</p>
                <input type="text" className="individual__input"/>
              </div>
          </div>

          <div className="individual__number">
            <div className="individual__number-container">
                <p className="individual__number-name">Номер телефону</p>
                <input type="text" className="individual__input"/>
              </div>
          </div>
        </div>
        <div className="input__individual individual">
          <div className="individual__country">
            <div className="individual__country-container">
                <p className="individual__country-name">Країна</p>
                <input type="text" className="individual__input"/>
            </div>
          </div>
          <div className="individual__town-data">
              <div className="individual__town-container">
                <p className="individual__town-name">Micто</p>
                <input type="text" className="individual__input"/>
              </div>
              <div className="individual__state-container">
                <p className="individual__state-name">Штат, район</p>
                <input type="text" className="individual__input"/>
              </div>
            </div>

            <div className="individual__address-container">
                <p className="individual__address-name">Адреса</p>
                <input type="text" className="individual__input"/>
            </div>

            <div className="individual__index-container">
                <p className="individual__index-name">Поштовий iндекс</p>
                <input type="text" className="individual__input"/>
            </div>
        </div>
      </div>
    </div>
  )
};