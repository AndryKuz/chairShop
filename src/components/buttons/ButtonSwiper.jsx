import React from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./button.scss";

const iconComponents = {
  Left: MdKeyboardDoubleArrowLeft,
  Right: MdKeyboardDoubleArrowRight,
};

const NavigateSwiper = ({ direction }) => {
  const IconComponent = iconComponents[direction];

  if (!IconComponent) {
    console.error(`Invalid direction: ${direction}`);
    return null;
  }

  return (
    <button className="wrapper-button">
      <IconComponent className="icon" />
      <div className="circle"></div>
    </button>
  );
};

export default NavigateSwiper;
