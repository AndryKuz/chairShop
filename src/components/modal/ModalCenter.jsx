import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import cl from "./ModalCenter.module.scss";
import { clearArrayCart, clearArrayFavorite } from "./modalSlice";

const ModalCenter = ({ onHide, actionType }) => {
  const dispatch = useDispatch();
  const [modalMessage, setModalMessage] = useState("");

  const handleModal = () => {
    onHide();
  };

  const clearItemWishlist = () => {
    dispatch(clearArrayFavorite());
    handleModal();
  };

  const clearAllCart = () => {
    dispatch(clearArrayCart());
  }

  const handleAction = () => {
    if (actionType === "clearWishlist") {
      clearItemWishlist();
      setModalMessage("Wishlist has been cleared.");
    } else if (actionType === "addAllToCart") {
      setModalMessage("All items have been added to cart.");
    } else if (actionType === 'clearAllCart') {
      clearAllCart();
      setModalMessage("Are you sure to empty your cart?");
    }
    handleModal();

    
  };
  useEffect(() => {
    if (actionType === "clearWishlist") {
      setModalMessage("Are you sure to empty your wishlist?");
    } else if (actionType === "addAllToCart") {
      setModalMessage("Add all items to cart?");
    } else if (actionType === 'clearAllCart') {
      setModalMessage("Are you sure to empty your cart?");
    }
  }, [actionType]);

  return (
    <>
      <div className="overlay" onClick={handleModal} />
      <div className={cl.wrapperModalCenter}>
        <h5>{modalMessage}</h5>
        <div className={cl.modalButton}>
          <button onClick={handleModal}>Cancel</button>
          <button onClick={handleAction}>Ok</button>
        </div>
      </div>
    </>
  );
};

export default ModalCenter;
