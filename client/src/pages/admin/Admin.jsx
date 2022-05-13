import React, { useState } from "react";
// Components
import CreateType from "../../components/modals/CreateType";
import CreateBrand from "../../components/modals/CreateBrand";
import CreateDevice from "../../components/modals/CreateDevice";
// Css
import "./Admin.scss";

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <div className="admin">
      <button className="add__type" onClick={() => setTypeVisible(true)}>
        Добавить тип
      </button>
      <button className="add__brand" onClick={() => setBrandVisible(true)}>
        Добавить бренд
      </button>
      <button className="add__device" onClick={() => setDeviceVisible(true)}>
        Добавить устройство
      </button>
      <CreateType typeVisible={typeVisible} setTypeVisible={setTypeVisible} />
      <CreateDevice
        deviceVisible={deviceVisible}
        setDeviceVisible={setDeviceVisible}
      />
      <CreateBrand
        brandVisible={brandVisible}
        setBrandVisible={setBrandVisible}
      />
    </div>
  );
};

export default Admin;
