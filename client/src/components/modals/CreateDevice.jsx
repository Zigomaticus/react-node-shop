import React, { useContext, useState } from "react";
import { Context } from "../..";
// Css
import "./Model.scss";

const CreateDevice = ({ deviceVisible, setDeviceVisible }) => {
  const { device } = useContext(Context);

  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([
      ...info,
      {
        title: "",
        discription: "",
        number: Date.now(),
      },
    ]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <div className={deviceVisible ? "modal active" : "modal"}>
      <div className="window">
        <div className="window__header">
          <div className="header__title">Добавить девайс</div>
          <div
            className="header__close"
            onClick={() => setDeviceVisible(false)}
          >
            X
          </div>
        </div>
        <div className="form">
          <div className="select">
            <label htmlFor="device">Выберите тип</label>
            <select name="device" id="device">
              {device.types.map((type) => (
                <option key={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
          <div className="select">
            <label htmlFor="device">Выберите бренд</label>
            <select name="device" id="device">
              {device.brands.map((type) => (
                <option key={type.id}>{type.name}</option>
              ))}
            </select>
          </div>
          <input type="text" placeholder="Введите название устройства" />
          <input type="number" placeholder="Введите стоимость устройства" />
          <input className="form__download" type="file" />
          <hr />
          <div className="form__add" onClick={addInfo}>
            Добавить новое свойство
          </div>
          {info.map((i) => (
            <div className="property" key={i.number}>
              <input
                className="property__input"
                placeholder="Введите название"
                type="text"
              />
              <input
                className="property__input"
                placeholder="Введите описание"
                type="text"
              />
              <button
                className="property__button"
                onClick={() => removeInfo(i.number)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
        <div className="window__footer">
          <div
            className="footer__close"
            onClick={() => setDeviceVisible(false)}
          >
            Закрыть
          </div>
          <div className="footer__add">Добавить</div>
        </div>
      </div>
    </div>
  );
};

export default CreateDevice;
