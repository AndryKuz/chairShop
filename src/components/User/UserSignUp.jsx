import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import SignUpWithSocial from "./SignUpWithSocial";

import cl from "../../assets/styles/User.module.scss";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { createUser } from "./userSlice";

const UserSignUp = ({ closeForm, toggleCurrentFormType }) => {
  const dispatch = useDispatch();
  const [valuesInput, setValuesInput] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValuesInput({ ...valuesInput, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmptyForm = Object.values(valuesInput).every((value) => value);

    if (!isNotEmptyForm) return;

    dispatch(createUser(valuesInput));
    closeForm();
  };

  return (
    <div className={cl.modalWindow}>
      <div className={cl.wrapper}>
        <div className={cl.close} onClick={closeForm}>
          <IoIosCloseCircleOutline />
        </div>
        <div className={cl.header}>
          <div className={cl.title} onClick={() => toggleCurrentFormType("login")}>LOG IN</div>
          <div
            className={cl.title}
            
          >
            CREATE ACCOUNT
          </div>
        </div>
        <h2>Create Account</h2>
        <form className={cl.form} onSubmit={handleSubmit}>
          <div className={cl.group}>
            <input
              value={valuesInput.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
              required
            />
          </div>
          <div className={cl.group}>
            <input
              value={valuesInput.name}
              onChange={handleChange}
              type="name"
              placeholder="Name"
              name="name"
              autoComplete="off"
              required
            />
          </div>
          <div className={cl.group}>
            <input
              value={valuesInput.password}
              onChange={handleChange}
              type="password"
              placeholder="password"
              name="password"
              autoComplete="off"
              required
            />
            <FaRegEye />
          </div>
          <div className={cl.group}>
            <input
              value={valuesInput.avatar}
              onChange={handleChange}
              type="avatar"
              placeholder="avatar"
              name="avatar"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className={cl.submit}>
            CREATE ACCOUNT
          </button>
        </form>
        <div className={cl.or}>or</div>
        <div className={cl.anotherCreate}>
          <div className={cl.social}>
            <SignUpWithSocial icon="facebook" provider="Facebook" />
          </div>
          <div className={cl.social}>
            <SignUpWithSocial icon="google" provider="Google" />
          </div>
          <div className={cl.social}>
            <SignUpWithSocial icon="apple" provider="Apple Id" />
          </div>
        </div>
        <div className={cl.sign}>
          Already have an account?
          <div
            className={cl.link}
            onClick={() => toggleCurrentFormType("login")}
          >
            Sign In
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
