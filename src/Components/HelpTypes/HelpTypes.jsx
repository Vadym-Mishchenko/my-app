import React from "react";

import './HelpTypes.scss';

export const HelpTypes = () => {
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
          <div className="payment-choice__left-card">
            <p className="payment-choice__left-title">VISA</p>
          </div>
          <div className="payment-choice__left-card payment-choice__left-card--active">
            <p className="payment-choice__left-title">Приват24</p>
          </div>
          <div className="payment-choice__left-card">
            <p className="payment-choice__left-title">Термiнали</p>
          </div>
          <div className="payment-choice__left-card">
            <p className="payment-choice__left-title">WebMoney</p>
          </div>
          <div className="payment-choice__left-card">
            <p className="payment-choice__left-title">PayPal</p>
          </div>
        </div>
        <div className="payment-choice__right">
          <p className="payment-choice__left-text">Введiть наступнi даннi</p>
          <div className="payment-choice__right-card card-data">
            <div className="card-data__number">
              <p className="card-data__number-p">Номер карти</p>
              <input type="text" className="card-data__number-input"/>
              <input type="text" className="card-data__number-input"/>
              <input type="text" className="card-data__number-input"/>
              <input type="text" className="card-data__number-input"/>
            </div>
            <div className="card-data__container">
              <div className="card-data__term">
                <p className="card-data__term-p">Термін дії</p>
                <input type="text" className="card-data__term-input"/>
              </div>
              <div className="card-data__cvv">
                <p className="card-data__cvv-p">CVC/CVV</p>
                <input type="text" className="card-data__cvv-input"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="help__button">Допомогти</button>
    </div>
  )
};
