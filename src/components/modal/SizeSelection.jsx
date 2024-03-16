import { useDispatch, useSelector } from "react-redux";
import cl from "./SizeSelection.module.scss";
import { SIZES } from "../Products/Product";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import {
  addItemFromFavoriteToCart,
  addItemToCart,
  removeItemFromFavorite,
  toggleModalCart,
} from "./modalSlice";
import AddProducttoCartModal from './AddProducttoCartModal';

const SizeSelection = ({ prod, setModalAddToCart }) => {
  const dispatch = useDispatch();
  const { showModalCart } = useSelector((state) => state.modal);
console.log(prod);

  const [isActiveSize, setIsActiveSize] = useState("");


  const handleCloseModal = () => {
    setModalAddToCart(false);
  };

  const addToCartItem = () => {
    dispatch(addItemFromFavoriteToCart(prod));
    handleCloseModal();
    dispatch(removeItemFromFavorite(prod.id));
    dispatch(toggleModalCart(true));
  };


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
              <img src={prod.images[0]} alt={prod.title} />
            </div>
            <div className={cl.priceItem}>$ {prod.price}</div>
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
