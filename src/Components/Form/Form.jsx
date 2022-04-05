import React, { useState } from "react";
import classNames from "classnames";
import { HelpTypes } from "../HelpTypes/HelpTypes";

import './Form.scss';

export const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export const numberCheck = (event, changer) => {
  if (event.target.value.split('').every(char => numbers.includes(char))) {
    changer(event.target.value);
  }
};

export const Form = () => {
  const [isPhysicalPerson, setIsPhysicalPerson] = useState(true);
  const [isEntityPerson, setIsEntityPerson] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [indexNumber, setIndexNumber] = useState('');


  const resetPerson = () => {
    setIsPhysicalPerson(false);
    setIsEntityPerson(false);
  };

  return (
    <form action="#" method="post">
      <div className="form">
        <h1 className="form__title">Заповнiть форму</h1>
        <div className="form__buttons buttons">
          <button
            type="button"
            className={classNames(
              "buttons__button",
              "buttons__button-r",
              { 'buttons__button--active': isPhysicalPerson }
            )}
            onClick={() => {
              if (!isPhysicalPerson) {
                resetPerson();
                setIsPhysicalPerson(true);
              }
            }}
          >
            Фiз. особа
          </button>

          <button
            type="button"
            className={classNames(
              "buttons__button",
              "buttons__button-l",
              { 'buttons__button--active': isEntityPerson }
            )}
            onClick={() => {
              if (!isEntityPerson) {
                resetPerson();
                setIsEntityPerson(true);
              }
            }}
          >
            Юр. особа
          </button>
        </div>

        <div className="form__input input">
          <div className="input__section section">
            <div className="section__container">
              <div className="section__container-individ">
                <p className="section__p">Ім'я</p>
                <input
                  className="section__input"
                  type="text"
                  required
                />
              </div>
              <div className="section__container-individ">
                <p className="section__p">Фамiлiя</p>
                <input
                  className="section__input"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="section__container-individ">
              <p className="section__p">Назва компанії, організації</p>
              <input
                className="section__input"
                type="text"
                required
              />
              <p className="section__logo">+ Логотип</p>
              
            </div>

            <div className="section__container-individ">
              <p className="section__p">Email-адрес</p>
              <input
                className="section__input"
                type="email"
                required
              />
            </div>

            <div className="section__container-individ">
              <p className="section__p">Номер телефону</p>
              <input
                className="section__input"
                type="text"
                required
                value={phoneNumber}
                onChange={(event) => {
                  numberCheck(event, setPhoneNumber)
                }}
              />
            </div>
          </div>

          <div className="input__section section">
            <div className="section__container-individ">
              <p className="section__p">Країна</p>
              <input
                className="section__input"
                type="text"
                required
              />
            </div>

            <div className="section__container">
              <div className="section__container-individ">
                <p className="section__p">Місто</p>
                <input
                  className="section__input"
                  type="text"
                  required
                />
              </div>
              <div className="section__container-individ">
                <p className="section__p">Штат, район</p>
                <input
                  className="section__input"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="section__container-individ">
              <p className="section__p">Адреса</p>
              <input
                className="section__input"
                type="text"
                required
              />
            </div>

            <div className="section__container">
              <div className="section__container-individ">
                <p className="section__p">Поштовий індекс</p>
                <input
                  className="section__input"
                  type="text"
                  required
                  value={indexNumber}
                  onChange={(event) => {
                    numberCheck(event, setIndexNumber)
                  }}
                />
              </div>
              <div className="section__container-individ"></div>
            </div>
          </div>
        </div>

        <HelpTypes />

        <button className="input__button"
        >Допомогти</button>
      </div>
    </form>
  )
};
