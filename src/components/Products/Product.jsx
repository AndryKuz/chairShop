import { useEffect } from "react";
import { useState } from "react";

import cl from "../../assets/styles/Product.module.scss";


import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  addItemToFavorite,
  toggleFormFavorite,
  toggleModalCart,
} from "../User/userSlice";

import { IoIosStarOutline} from "react-icons/io";

import AddProductToCart from "../modal/AddProductToCart";
import WishlistModal from "../modal/WishlistModal";



const SIZES = [44, 45, 47];

const Product = (item) => {
  const { title, images, price, description } = item;
  const { showModalFavorite, showModalCart} = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const oldPrice = Math.round(price * 1.3);

  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();
  const [modalMessage, setModalMessage] = useState("");
  
  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));

    dispatch(toggleModalCart(true));
  };
  const addToFavorite = () => {
    dispatch(addItemToFavorite(item));
  };

  return (
    <section className={cl.product}>
      <div className={cl.galarry}>
        <div className={cl.mainImage}>
          <img src={currentImage} alt="img" />
        </div>
        <div className={cl.imageCurrent}>
          {images.map((image, i) => (
            <div
              className={cl.images}
              key={i}
              onClick={() => setCurrentImage(image)}
            >
              <img src={image} alt={`Image ${i}`} />
            </div>
          ))}
        </div>
      </div>
      <div className={cl.infoProduct}>
        <div className={cl.title}>
          <h3>{title}</h3>
        </div>
        <div className={cl.price}>
          {price}$ <span>{oldPrice}$</span>
        </div>
        <div className={cl.sizes}>
          {SIZES.map((size) => (
            <div
              className={`${cl.size} ${
                currentSize === size ? cl.activeSize : ""
              }`}
              key={size}
              onClick={() => setCurrentSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <div className={cl.buttons}>
          <button
            onClick={addToCart}
            className={`${cl.addToCart} ${cl.generalStyle}`}
            disabled={!currentSize}
          >
            ADD TO CART
          </button>
          {showModalCart && ( <AddProductToCart/>)}
          <button
            onClick={addToFavorite}
            className={`${cl.favorite} ${cl.generalStyle}`}
          >
            <span>WISHLIST</span>
            <IoIosStarOutline />
          </button>
          {modalMessage && (<WishlistModal title={item.title}/>)}
        </div>
        <div className={cl.description}>{description}</div>
        <div className={cl.help}>
          <p>You can contact iceberg.com customer service by email at</p>
          <Link>customercare@iceberg.com</Link>{" "}
          <p>, we will reply within 2 working days (Mon-Fri).</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
