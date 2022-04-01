import React from "react";

import './Form.scss';

export const Form = () => {
  return (
    <div className="form">
      <h1 className="form__title">Заповнiть форму</h1>
      <div className="form__buttons">
        <button type="button" className="buttons__button-individual">Фiз. особа</button>
        <button type="button" className="buttons-button-entity">Юр. особа</button>
      </div>

      <div className="form__input input">

        <div className="input__section section">
          <div className="section__container">
            <div className="section__container-individ">
              <p className="section__p">Ім'я</p>
              <input type="text" className="section__input" />
            </div>
            <div className="section__container-individ">
              <p className="section__p">Фамiлiя</p>
              <input type="text" className="section__input" />
            </div>
          </div>

          <div className="section__container-individ">
            <p className="section__p">Назва компанії, організації</p>
            <input type="text" className="section__input" />
          </div>

          <div className="section__container-individ">
            <p className="section__p">Email-адрес</p>
            <input type="text" className="section__input" />
          </div>

          <div className="section__container-individ">
            <p className="section__p">Номер телефону</p>
            <input type="text" className="section__input" />
          </div>
        </div>

        <div className="input__section section">
          <div className="section__container-individ">
            <p className="section__p">Країна</p>
            <input type="text" className="section__input" />
          </div>

          <div className="section__container">
            <div className="section__container-individ">
              <p className="section__p">Місто</p>
              <input type="text" className="section__input" />
            </div>
            <div className="section__container-individ">
              <p className="section__p">Штат, район</p>
              <input type="text" className="section__input" />
            </div>
          </div>

          <div className="section__container-individ">
            <p className="section__p">Адреса</p>
            <input type="text" className="section__input" />
          </div>

          <div className="section__container">
            <div className="section__container-individ">
              <p className="section__p">Поштовий індекс</p>
              <input type="text" className="section__input" />
            </div>
            <div className="section__container-individ"></div>
          </div>
        </div>

      </div>
    </div>
  )
};