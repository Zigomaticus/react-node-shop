import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import star from "../assets/star.svg";

const DeviceItem = ({ device }) => {
  return (
    <Col md={3}>
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={device.img} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>Samsumg...</div>
          <div>
            <div>{device.raiting}</div>
            <Image src={star} />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
