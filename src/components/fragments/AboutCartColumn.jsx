import { Link } from "react-router-dom";

import cl from '../../../src/assets/styles/About.module.scss'
import { ROUTES } from "../../utils/routes";


const AboutCartColumn = ({title, text}) => {
  return (
    <div className={cl.infoCol}>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className='button'>
        <Link to={ROUTES.ABOUT}>
          More info
          <svg viewBox="0 0 39 13">
            <path d="M0.5 6.40024H38M38 6.40024C38 6.40024 33.5119 3.44867 32.6 1.00024M38 6.40024C38 6.40024 34.0324 9.17362 32.6 11.8002" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default AboutCartColumn;
