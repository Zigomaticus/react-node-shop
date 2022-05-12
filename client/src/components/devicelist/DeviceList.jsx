import React from "react";
import { observer } from "mobx-react-lite";
// Componetns
import DeviceItem from "../deviceitem/DeviceItem";
// Css
import "./DeviceList.scss";

const DeviceList = ({ device }) => {
  return (
    <div className="device">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
};

export default observer(DeviceList);
