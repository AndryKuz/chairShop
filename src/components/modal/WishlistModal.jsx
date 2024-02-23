import { useDispatch, useSelector } from "react-redux";
import cl from "./WishlistModal.module.scss";

import { TiDeleteOutline } from "react-icons/ti";
import { useState } from "react";
import { useEffect } from "react";
import { toggleModalFavorite } from "../modal/modalSlice";

const WishlistModal = ({ title }) => {
  const dispatch = useDispatch();
  const { showModalFavorite } = useSelector((state) => state.modal);
  const [modalMessage, setModalMessage] = useState("");



  const closeModal = () => {
    setModalMessage("");
    dispatch(toggleModalFavorite(null));
  };

  useEffect(() => {
    if (showModalFavorite !== null) {
      if (showModalFavorite) {
        setModalMessage(`You added ${title} to your wishlist.`);
      } else {
        setModalMessage(`You removed ${title} from your wishlist.`);
      }

      const timer = setTimeout(() => {
        closeModal();
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showModalFavorite]);

  return (
    <div
      className={`${cl.bottomModal} ${
        modalMessage ? cl.bottomModalActive : ""
      }`}
    >
      <div className={cl.modalContent}>
        <p>{modalMessage}</p>
        <TiDeleteOutline onClick={closeModal} />
      </div>
    </div>
  );
};

export default WishlistModal;
