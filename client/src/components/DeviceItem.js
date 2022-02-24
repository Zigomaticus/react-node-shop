import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import star from "../assets/star.svg";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={device.img} />
        <div className="d-flex justify-content-between align-items-center mt-1 text-black-50">
          <div>Samsumg...</div>
          <div className="d-flex align-items-center">
            <div>{device.raiting}</div>
            <Image src={star} width={18} height={18} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
