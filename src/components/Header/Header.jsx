import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { ROUTES } from "../../utils/routes";
import { toggleForm } from "../User/userSlice";

import logo from "../../assets/images/PngItem_2963531.png";

import cl from "../../assets/styles/Header.module.scss";

import { IoPersonOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ name: "Guest", avatar: logo });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useSelector(({ user }) => user);
  const { list } = useSelector((state) => state.categories);
  const {cart, favorite} = useSelector((state) => state.user);


  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
  };

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleMenuHover = () => {
    setIsModalOpen(true);
  };
  const handleMenuLeave = () => {
    setIsModalOpen(false);
  };

  const setActive = ({ isActive }) => (isActive ? "activeMenu" : "");
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
            <NavLink to={ROUTES.HOME} className={setActive}>
              Home
            </NavLink>
            <NavLink
              to={ROUTES.FURNITURE}
              className={setActive}
              onMouseEnter={handleMenuHover}
              onMouseLeave={handleMenuLeave}
            >
              Furniture
              <IoMdArrowDropdown />
            </NavLink>
            {isModalOpen && (
              <div className={cl.modalCategories} onMouseLeave={handleMenuLeave} onMouseEnter={handleMenuHover}>
                <ul>
                  {list.map(({ id, name }) => (
                    <li key={id}>
                      <NavLink
                      onClick={() => setIsModalOpen(false)}
                        className={({ isActive }) =>
                          `${cl.link} ${isActive ? cl.active : ""}`
                        }
                        to={`categories/${id}`}
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <NavLink to={ROUTES.ABOUT} className={setActive}>
              About
            </NavLink>
            <NavLink to={ROUTES.CONTACTS} className={setActive}>
              Contacts
            </NavLink>
          </div>

          <div className={cl.account}>
            <div>{values.name}</div>
            <div style={{ backgroundImage: `url(${values.avatar})` }}></div>
            <div className={cl.user} onClick={handleClick}>
              <IoPersonOutline className="icon login-icon " />
            </div>
            <div className={cl.favorite}>
              <Link>
                <FaRegHeart className="icon heart-icon" />
                <div className={cl.countFavorite}>
                  <span>{favorite.length}</span>
                </div>
              </Link>
            </div>
            <div className={cl.cart}>
              <Link to={ROUTES.CART}>
                <BsCart4 className="icon heart-icon" />
                <div className={cl.countCart}>
                  <span>{cart.length}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
