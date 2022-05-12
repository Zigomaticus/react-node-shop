import React from "react";
import { useNavigate } from "react-router-dom";
// Assets
import littleStar from "../../assets/littleStar.png";
// Css
import "./DeviceItem.scss";

const DeviceItem = ({ device }) => {
  let navigate = useNavigate();

  return (
    <div
      className="device__item"
      onClick={() => navigate("/device" + "/" + device.id)}
    >
      <img src={device.img} alt="item" width={150} height={150} />
      <div className="device">
        <div className="device__brand">Samsung...</div>
        <div className="device__rating">{device.rating}</div>
        <img src={littleStar} alt="start" width={18} height={18} />
      </div>
      <div className="device__name">{device.name}</div>
    </div>
  );
};

export default DeviceItem;
