import React from "react";
// Css
import "./Model.scss";

const CreateType = ({ typeVisible, setTypeVisible }) => {
  return (
    <div className={typeVisible ? "modal active" : "modal"}>
      <div className="window">
        <div className="window__header">
          <div className="header__title">Добавить тип</div>
          <div className="header__close" onClick={() => setTypeVisible(false)}>
            X
          </div>
        </div>
        <input
          type="text"
          className="window__input"
          placeholder="Введите название типа"
        />
        <div className="window__footer">
          <div className="footer__close" onClick={() => setTypeVisible(false)}>
            Закрыть
          </div>
          <div className="footer__add">Добавить</div>
        </div>
      </div>
    </div>
  );
};

export default CreateType;
