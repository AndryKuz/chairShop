import { Link } from "react-router-dom";

import cl from "../../assets/styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className={cl.contentRow}>
          <div className={cl.main}>
            <span className={cl.logo}>Panto</span>
            <p className={cl.text}>
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>
          <div className={cl.services}>
            <span>Services</span>
            <Link>Email Marketing</Link>
            <Link>Campaigns</Link>
            <Link>Branding</Link>
          </div>
          <div className={cl.category}>
            <span>Furniture</span>
            <Link>Beds</Link>
            <Link>Chair</Link>
            <Link>All</Link>
          </div>
        </div>
        <div className={cl.contentDown}>
          <div className={cl.copy}>Copyright © 2024</div>
          <div className={cl.other}>
            Terms & Conditions
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
