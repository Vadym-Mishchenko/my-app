import React, { useState } from "react";
import classNames from "classnames";
import { numberCheck } from "../Form/Form";

import './HelpTypes.scss';

export const HelpTypes = () => {
  const [isVisa, setIsVisa] = useState(false);
  const [isPrivat, setIsPrivat] = useState(true);
  const [isTerminal, setIsTerminal] = useState(false);
  const [isWebMoney, setIsWebMoney] = useState(false);
  const [isPayPal, setIsPayPal] = useState(false);

  const [number_1, setNumber_1] = useState('');
  const [number_2, setNumber_2] = useState('');
  const [number_3, setNumber_3] = useState('');
  const [number_4, setNumber_4] = useState('');
  const [pass, setPass] = useState('');
  const [dateInput, setDateInput] = useState('');

  const dateCheck = (event) => {
    if (event.target.value.length === 2) {
      setDateInput(`${event.target.value}/`);
    } else {
      setDateInput(event.target.va);
    }
  };

  const resetDisplay = () => {
    setIsVisa(false);
    setIsPrivat(false);
    setIsTerminal(false);
    setIsWebMoney(false);
    setIsPayPal(false);
  }

  return (
    <div className="help">
      <h1 className="help__title">Види допомоги</h1>
      <p className="help__p">Ви можете змiнити вид допомоги</p>
      <div className="help__type">
        <div className="help__container">
          <div className="help__type-icon help__type-icon--do"></div>
          <p className="help__type-name">Зробити</p>
        </div>

        <div className="help__container">
          <div className="help__type-icon help__type-icon--financial help__type-icon--active"></div>
          <p className="help__type-name help__type-name--active">Фiнансова допомога</p>
        </div>

        <div className="help__container">
          <div className="help__type-icon help__type-icon--material"></div>
          <p className="help__type-name">Матерiальна допомога</p>
        </div>

        <div className="help__container">
          <div className="help__type-icon help__type-icon--heart"></div>
          <p className="help__type-name">Волонтерство</p>
        </div>
      </div>

      <div className="help__payment-choice payment-choice">
        <div className="payment-choice__left">
          <p className="payment-choice__left-text">Споciб оплати</p>

          <div className={classNames(
            "payment-choice__left-card",
            { 'payment-choice__left-card--active': isVisa }
          )}
            onClick={() => {
              resetDisplay();
              setIsVisa(!isVisa);
            }}
          >
            <p className="payment-choice__left-title">VISA</p>
          </div>

          <div className={classNames(
            "payment-choice__left-card",
            { 'payment-choice__left-card--active': isPrivat }
          )}
            onClick={() => {
              resetDisplay();
              setIsPrivat(!isPrivat);
            }}
          >
            <p className="payment-choice__left-title">Приват24</p>
          </div>

          <div className={classNames(
            "payment-choice__left-card",
            { 'payment-choice__left-card--active': isTerminal }
          )}
            onClick={() => {
              resetDisplay();
              setIsTerminal(!isTerminal);
            }}
          >
            <p className="payment-choice__left-title">Термiнали</p>
          </div>

          <div className={classNames(
            "payment-choice__left-card",
            { 'payment-choice__left-card--active': isWebMoney }
          )}
            onClick={() => {
              resetDisplay();
              setIsWebMoney(!isWebMoney);
            }}
          >
            <p className="payment-choice__left-title">WebMoney</p>
          </div>

          <div className={classNames(
            "payment-choice__left-card",
            { 'payment-choice__left-card--active': isPayPal }
          )}
            onClick={() => {
              resetDisplay();
              setIsPayPal(!isPayPal);
            }}
          >
            <p className="payment-choice__left-title">PayPal</p>
          </div>
        </div>
        <div className="payment-choice__right">
          <p className="payment-choice__right-text">Введiть наступнi даннi</p>
          <div className="payment-choice__right-card card-data">
            <div className="card-data__number">
              <p className="card-data__number-p">Номер карти</p>
              <input
                type="text"
                className="card-data__number-input"
                required
                minLength={4}
                maxLength={4}
                value={number_1}
                onChange={(event) => {
                  numberCheck(event, setNumber_1);
                }}
              />
              <input
                type="text"
                className="card-data__number-input"
                required
                minLength={4}
                maxLength={4}
                value={number_2}
                onChange={(event) => {
                  numberCheck(event, setNumber_2);
                }}
              />
              <input
                type="text"
                className="card-data__number-input"
                required
                minLength={4}
                maxLength={4}
                value={number_3}
                onChange={(event) => {
                  numberCheck(event, setNumber_3);
                }}
              />
              <input
                type="text"
                className="card-data__number-input"
                required
                minLength={4}
                maxLength={4}
                value={number_4}
                onChange={(event) => {
                  numberCheck(event, setNumber_4);
                }}
              />
            </div>
            <div className="card-data__container">
              <div className="card-data__term">
                <p className="card-data__term-p">Термін дії</p>
                <input
                  className="card-data__term-input"
                  type="text"
                  required
                  minLength={5}
                  maxLength={5}
                  value={dateInput}
                  onChange={(event) => {
                    dateCheck(event);
                  }}
                />
              </div>
              <div className="card-data__cvv">
                <p className="card-data__cvv-p">CVC/CVV</p>
                <input
                  className="card-data__cvv-input"
                  type="password"
                  required
                  minLength={3}
                  maxLength={3}
                  value={pass}
                  onChange={(event) => {
                    numberCheck(event, setPass);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
