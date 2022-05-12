import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
// Context
import { Context } from "../..";
// Components
import TypeBar from "../../components/typebar/TypeBar";
import BrandBar from "../../components/brandbar/BrandBar";
import DeviceList from "../../components/devicelist/DeviceList";
// Css
import "./Shop.scss";

const Shop = () => {
  const { device } = useContext(Context);

  return (
    <div className="shop">
      <TypeBar device={device} />
      <div className="wrapper">
        <BrandBar device={device} />
        <DeviceList device={device} />
      </div>
    </div>
  );
};

export default observer(Shop);
