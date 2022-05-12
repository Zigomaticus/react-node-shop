import React from "react";
// Assetc
import bigStart from "../../assets/bigStart.png";
// Css
import "./DevicePage.scss";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Iphone 12 pro",
    price: 100000,
    rating: 5,
    img: "https://www.hdretail.ru/upload/iblock/8d0/8d01c02a7a68c45e7d021d9d44efab9f.jpg",
  };

  const discription = [
    { id: 1, title: "Оперативная память", discription: "5 гб" },
    { id: 2, title: "Камера", discription: "12 мп" },
    { id: 3, title: "Процессор", discription: "Пентиум 3" },
    { id: 4, title: "Колличество ядер", discription: "2" },
    { id: 5, title: "Аккумулятор", discription: "4000" },
  ];

  return (
    <div className="background">
      <div className="page">
        <div className="page__info">
          <img
            src={device.img}
            alt="item"
            className="info__img"
            width={300}
            height={300}
          />

          <div className="star">
            <div>{device.name}</div>
            <div className="div">
              <img src={bigStart} alt="bigStar" className="star__img" />
              <div className="rating">{device.rating}</div>
            </div>
          </div>
          <div className="ect">
            <div className="ect__price">от {device.price} руб.</div>
            <div className="ect__cart">Добавить в корзину</div>
          </div>
        </div>
        <div className="page__static">
          <h2>Характеристики:</h2>
          <ul>
            {discription.map((info, index) => (
              <li key={info.id}>
                {info.title} : {info.discription}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DevicePage;
