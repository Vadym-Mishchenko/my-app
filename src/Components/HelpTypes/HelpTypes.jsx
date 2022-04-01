import React from "react";

import './HelpTypes.scss';

export const HelpTypes = () => {
  return (
    <div className="help">
      <h1 className="help__title">Види допомоги</h1>
      <p className="help__p">Ви можете змiнити вид допомоги</p>
      <div className="help__type">
        <div className="help__container">
          <div className="help__type-icon"></div>
          <p className="help__type-name">Зробити</p>
        </div>

        <div className="help__container">
          <div className="help__type-icon help__type-icon--active"></div>
          <p className="help__type-name help__type-name--active">Фiнансова</p>
        </div>

        <div className="help__container">
          <div className="help__type-icon"></div>
          <p className="help__type-name">Матерiальна</p>
        </div>

        <div className="help__container">
          <div className="help__type-icon"></div>
          <p className="help__type-name">Волонтерство</p>
        </div>
      </div>
      <div className="help__input"></div>
      <button className="help__button">Допомогти</button>
    </div>
  )
};
