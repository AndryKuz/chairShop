import { useDispatch, useSelector } from "react-redux";

import cl from "../../assets/styles/User.module.scss";

import { toggleForm, toggleFormType } from "./userSlice";
import UserSignUp from "./UserSignUp";
import UserSignIn from "./UserSignIn";

const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const closeForm = () => dispatch(toggleForm(false));

  const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));
  return showForm ? (
    <>
      <div className={cl.overlay} onClick={closeForm} />  
      {formType === "signup" ? (
        <UserSignUp
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      ) : (
        <UserSignIn
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;
