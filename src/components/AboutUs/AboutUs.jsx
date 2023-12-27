import AboutCartColumn from "./AboutCartColumn";

import cl from "../../assets/styles/About.module.scss";

import { aboutData } from "../../data/aboutData";

const AboutUs = () => {
  return (
    <section className={cl.about}>
      <div className="container">
        <div className={cl.aboutContent}>
          <div className={cl.title}>
            Why <br /> Choosing Us
          </div>
          <div className={cl.infoRow}>
            {aboutData.map((item) => (
              <AboutCartColumn key={item.id} title={item.title} text={item.text}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
