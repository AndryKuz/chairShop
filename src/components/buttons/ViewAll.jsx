import "./button.scss";
import { Link } from "react-router-dom";

import { PiArrowRightLight } from "react-icons/pi";


const ViewAll = ({ route }) => {
  return (
    <button className="button-arrow">
      <Link to={route}>View All</Link>
      <PiArrowRightLight className="arrow" />
    </button>
  );
};

export default ViewAll;
