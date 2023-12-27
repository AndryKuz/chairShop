import cl from "../../../src/assets/styles/About.module.scss";

import { ROUTES } from "../../utils/routes";

import ViewAll from "../buttons/ViewAll";

const AboutCartColumn = ({ title, text }) => {
  return (
    <div className={cl.infoCol}>
      <h3>{title}</h3>
      <p>{text}</p>
      <ViewAll route={ROUTES.ABOUT}/>
    </div>
  );
};

export default AboutCartColumn;
