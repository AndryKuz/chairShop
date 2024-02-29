import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import cl from "./ModalCenter.module.scss";
import { clearArrayFavorite } from "./modalSlice";

const ModalCenter = ({ onHide, actionType }) => {
  const dispatch = useDispatch();
  const [modalMessage, setModalMessage] = useState("");

console.log(typeof(addAllToCart));

  const handleModal = () => {
    onHide();
  };

  const clearItemWishlist = () => {
    dispatch(clearArrayFavorite());
    handleModal();
  };

  const handleAction = () => {
    if (actionType === "clearWishlist") {
      clearItemWishlist();
      setModalMessage("Wishlist has been cleared.");
    } else if (actionType === "addAllToCart") {
      // dispatch(addAllItemsToCart());
      setModalMessage("All items have been added to cart.");
    }
    handleModal();

    
  };
  useEffect(() => {
    if (actionType === "clearWishlist") {
      setModalMessage("Are you sure to empty your wishlist?");
    } else if (actionType === "addAllToCart") {
      setModalMessage("Add all items to cart?");
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
