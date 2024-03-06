import "./button.scss";
import { Link } from "react-router-dom";

import { PiArrowRightLight } from "react-icons/pi";

const ViewAll = ({ route }) => {
  return (
    <button className="button-arrow">
      <Link to={route} className="button-link">
        View All
        <PiArrowRightLight className="arrow" />
      </Link>
    </button>
  );
};

export default ViewAll;
