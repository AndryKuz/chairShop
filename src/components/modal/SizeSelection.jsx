import { useDispatch, useSelector } from "react-redux";
import cl from "./SizeSelection.module.scss";
import { SIZES } from "../Products/Product";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import {
  addItemToCart,
  removeItemFromFavorite,
  toggleModalCart,
} from "./modalSlice";
import AddProducttoCartModal from './AddProducttoCartModal';

const SizeSelection = ({ item, setModalAddToCart }) => {
  const dispatch = useDispatch();
  const { showModalCart } = useSelector((state) => state.modal);




  const [isActiveSize, setIsActiveSize] = useState("");

  const chooseSize = () => {
    setIsActiveSize(true);
  };

  const handleCloseModal = () => {
    setModalAddToCart(false);
  };

  const addToCartItem = () => {
    dispatch(addItemToCart(item));
    handleCloseModal();
    dispatch(removeItemFromFavorite(item.id));
    dispatch(toggleModalCart(true));
  };

  // useEffect(() => {
  //   if (showModalCart) {
  //     // Переместите dispatch(toggleModalCart(true)) сюда, чтобы вызвать его после обновления состояния showModalCart
  //     dispatch(toggleModalCart(true));
  //   }
  // }, [showModalCart, dispatch]);
  

  return (
    <>
      <div className="overlay" onClick={handleCloseModal}></div>
      <div className={`${cl.sizeModalWrapper} ${showModalCart ? cl.wrapperAnimationDown : ''}`}>
        <IoMdClose onClick={handleCloseModal} />
        <div className={cl.sizeChoose}>
          {SIZES.map((size) => (
            <div
              className={`${cl.size} ${
                isActiveSize === size ? cl.activeSizeButton : ""
              }`}
              key={size}
              onClick={() => setIsActiveSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <div className={cl.itemAddToCart}>
          <div className={cl.cardItem}>
            <div className={cl.imageItem}>
              <img src={item.images[0]} alt={item.title} />
            </div>
            <div className={cl.priceItem}>$ {item.price}</div>
          </div>
          <button disabled={!isActiveSize} onClick={addToCartItem}>
            add to cart
          </button>
          {showModalCart && <AddProducttoCartModal />}
        </div>
      </div>
    </>
  );
};

export default SizeSelection;
