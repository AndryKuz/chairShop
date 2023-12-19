import { Link, NavLink } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import logo from "../../assets/images/PngItem_2963531.png";

import cl from "../../assets/styles/Header.module.scss";

const Header = () => {

  const setActive = ({isActive}) => isActive ? 'activeMenu' : '';
  return (
    <header>
      <div className="container">
        <div className={cl.header}>
          <div className={cl.logo}>
            <Link to={ROUTES.HOME}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={cl.menu}>
            <NavLink to={ROUTES.HOME} className={setActive}>Home</NavLink>
            <NavLink to={ROUTES.FURNITURE} className={setActive}>Furniture</NavLink>
            <NavLink to={ROUTES.ABOUT} className={setActive}>About</NavLink>
            <NavLink to={ROUTES.CONTACTS} className={setActive}>Contacts</NavLink>
          </div>
          <div className={cl.account}>
            <Link to={ROUTES.HOME} className={cl.user}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 512 512"
              >
                <path d="M256.09,266a99.83,99.83,0,1,0-70.66-29.22A99.61,99.61,0,0,0,256.09,266ZM201.47,111.56a77.24,77.24,0,1,1-22.62,54.61A77,77,0,0,1,201.47,111.56Z" />
                <path d="M256.09,281.83c-84.6,0-153.43,68.82-153.43,153.42A11.34,11.34,0,0,0,114,446.59H398.17a11.34,11.34,0,0,0,11.34-11.34C409.51,350.65,340.68,281.83,256.09,281.83ZM125.83,423.91c5.76-66.8,62-119.4,130.26-119.4s124.49,52.6,130.25,119.4Z" />
              </svg>
              
            </Link>
            <Link to={ROUTES.HOME} className={cl.favorite}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <g>
                  <path d="M50,91.5C50,91.5,50,91.5,50,91.5c-0.8,0-1.6-0.3-2.2-0.9L8.5,51.1c-4.9-4.8-7.5-11.6-7.3-18.7c0.4-7.1,3.7-13.8,9.1-18.4   c4.5-3.6,9.9-5.5,15.6-5.5c6.9,0,13.7,2.8,18.6,7.7l5.5,5.5l5.5-5.4c9.6-9.6,24.3-10.5,34.2-2c5.4,4.3,8.7,10.8,9.1,17.9   c0.4,7.1-2.3,14.1-7.3,19.1L52.1,90.7C51.6,91.2,50.8,91.5,50,91.5z M48.6,87.1C48.6,87.1,48.6,87.1,48.6,87.1L48.6,87.1z    M25.9,13.5c-4.6,0-8.9,1.5-12.5,4.4c-4.3,3.7-7,9-7.3,14.7C6,38.3,8.1,43.7,12,47.5l38,38.2l38-38c4-4,6.1-9.7,5.8-15.3   c-0.3-5.6-2.9-10.8-7.3-14.3c-7.9-6.8-19.7-6.1-27.5,1.7l-9,8.9l-9-9C37.1,15.7,31.5,13.5,25.9,13.5z" />
                </g>
              </svg>
              <div className={cl.countFavorite}><span>0</span></div>
            </Link>
            <Link to={ROUTES.CART} className={cl.cart}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z" />
                <path d="M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z" />
                <path d="M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z" />
                <path d="M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z" />
              </svg>
              <div className={cl.countCart}><span>0</span></div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
