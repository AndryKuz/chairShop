import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import "./button.scss";

const ButtonDinamic = ({isPlus}) => {

const Icon = isPlus ? FaPlus : FaMinus;

  return (
    <button className="wrapper-button">
      <Icon className="icon" />
      <div className="circle"></div>
    </button>
  );
};

export default ButtonDinamic;
