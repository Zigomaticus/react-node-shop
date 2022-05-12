import React from "react";
import { observer } from "mobx-react-lite";
// Css
import "./BrandBar.scss";

const BrandBar = ({ device }) => {
  return (
    <div className="brands">
      {device.brands.map((brand) => (
        <div
          className="brands__item"
          key={brand.id}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </div>
      ))}
    </div>
  );
};

export default observer(BrandBar);
