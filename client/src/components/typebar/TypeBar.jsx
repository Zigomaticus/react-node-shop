import React from "react";
// Css
import "./TypeBar.scss";

const TypeBar = ({device}) => {
  return (
    <div className="shop__types">
      <ul className="types">
        {device.types.map((type) => (
          <li
            key={type.id}
            onClick={() => device.setSelectedTyp(type)}
          >
            {type.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TypeBar;
