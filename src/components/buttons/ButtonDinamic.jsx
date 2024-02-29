import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

import "./button.scss";

const ButtonDinamic = ({isPlus, svgSize, widthCircle, hightCircle}) => {

const Icon = isPlus ? FaPlus : FaMinus;

const svgStyle = {
  width: svgSize || '25px',
  height:'auto',
};

const circleStyle = {
  width: widthCircle || '40px',
  height: hightCircle || '40px',
};


  return (
    <button className="wrapper-button" style={circleStyle} >
      <Icon className="svg-dinamic" style={svgStyle}/>
      <div className="circle" ></div>
    </button>
  );
};

export default ButtonDinamic;
