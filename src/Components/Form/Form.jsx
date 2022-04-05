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
  const [inputName, setInputName] = useState('');
  const [inputSurename, setInputSurename] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCompany, setInputCompany] = useState('');
  const [inputCountry, setInputCountry] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [inputState, setInputState] = useState('');
  const [inputAdres, setInputAdres] = useState('');
  const [number_1, setNumber_1] = useState('');
  const [number_2, setNumber_2] = useState('');
  const [number_3, setNumber_3] = useState('');
  const [number_4, setNumber_4] = useState('');
  const [pass, setPass] = useState('');
  const [dateInput, setDateInput] = useState('');

  const charCheck = (event, changer) => {
      changer(event.target.value);
  };

  const clearForm = () => {
    setInputName('');
    setInputSurename('');
    setInputCompany('');
    setPhoneNumber('');
    setIndexNumber('');
    setInputEmail('');
    setInputCountry('');
    setInputCity('');
    setInputState('');
    setInputAdres('');
    setNumber_1('');
    setNumber_2('');
    setNumber_3('');
    setNumber_4('');
    setPass('');
    setDateInput('');
  };

  const buttonSubmit = () => {
    alert(`${inputName} ${inputSurename} дякуємо за допомогу :`)
    clearForm()
  }

  const resetPerson = () => {
    setIsPhysicalPerson(false);
    setIsEntityPerson(false);
  };

  return (
    <form action="#" method="post" onSubmit={(event) => {
      event.preventDefault();
      buttonSubmit();
    }}>
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
                  value={inputName}
                  onChange={(event) => {
                    charCheck(event, setInputName)
                  }}
                />
              </div>
              <div className="section__container-individ">
                <p className="section__p">Фамiлiя</p>
                <input
                  className="section__input"
                  type="text"
                  required
                  value={inputSurename}
                  onChange={(event) => {
                    charCheck(event, setInputSurename)
                  }}
                />
              </div>
            </div>

            <div className="section__container-individ">
              <p className="section__p">Назва компанії, організації</p>
              <input
                className="section__input"
                type="text"
                required
                value={inputCompany}
                onChange={(event) => {
                  charCheck(event, setInputCompany)
                }}
              />
              <p className="section__logo">+ Логотип</p>
              
            </div>

            <div className="section__container-individ">
              <p className="section__p">Email-адрес</p>
              <input
                className="section__input"
                type="email"
                required
                value={inputEmail}
                onChange={(event) => {
                  charCheck(event, setInputEmail)
                }}
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
                value={inputCountry}
                onChange={(event) => {
                  charCheck(event, setInputCountry)
                }}
              />
            </div>

            <div className="section__container">
              <div className="section__container-individ">
                <p className="section__p">Місто</p>
                <input
                  className="section__input"
                  type="text"
                  required
                  value={inputCity}
                  onChange={(event) => {
                    charCheck(event, setInputCity)
                  }}
                />
              </div>
              <div className="section__container-individ">
                <p className="section__p">Штат, район</p>
                <input
                  className="section__input"
                  type="text"
                  required
                  value={inputState}
                  onChange={(event) => {
                    charCheck(event, setInputState)
                  }}
                />
              </div>
            </div>

            <div className="section__container-individ">
              <p className="section__p">Адреса</p>
              <input
                className="section__input"
                type="text"
                required
                value={inputAdres}
                onChange={(event) => {
                  charCheck(event, setInputAdres)
                }}
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

        <HelpTypes
          number_1={number_1}
          setNumber_1={setNumber_1}
          number_2={number_2}
          setNumber_2={setNumber_2}
          number_3={number_3}
          setNumber_3={setNumber_3}
          number_4={number_4}
          setNumber_4={setNumber_4}
          pass={pass}
          setPass={setPass}
          dateInput={dateInput}
          setDateInput={setDateInput}
        />

        <button
          className="input__button"
          type="submit"
        >
          Допомогти
        </button>
      </div>
    </form>
  )
};
