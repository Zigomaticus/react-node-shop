import React from "react";
// Css
import "./Model.scss";

const CreateBrand = ({ brandVisible, setBrandVisible }) => {
  return (
    <div className={brandVisible ? "modal active" : "modal"}>
      <div className="window">
        <div className="window__header">
          <div className="header__title">Добавить бренд</div>
          <div className="header__close" onClick={() => setBrandVisible(false)}>
            X
          </div>
        </div>
        <input
          type="text"
          className="window__input"
          placeholder="Введите название бренда"
        />
        <div className="window__footer">
          <div className="footer__close" onClick={() => setBrandVisible(false)}>
            Закрыть
          </div>
          <div className="footer__add">Добавить</div>
        </div>
      </div>
    </div>
  );
};

export default CreateBrand;
