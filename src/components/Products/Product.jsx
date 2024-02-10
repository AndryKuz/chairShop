import { useEffect } from "react";
import { useState } from "react";

import cl from "../../assets/styles/Product.module.scss";

import { IoIosStarOutline, IoMdClose } from "react-icons/io";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  addItemToFavorite,
  toggleFormFavorite,
  toggleModalCart,
} from "../User/userSlice";

import { TiDeleteOutline } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import ButtonDinamic from "../buttons/ButtonDinamic";
import ViewAll from "../buttons/ViewAll";
import { ROUTES } from "../../utils/routes";

const SIZES = [44, 45, 47];

const Product = (item) => {
  const { title, images, price, description } = item;
  const { showModalFavorite, showModalCart, cart } = useSelector(
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

  useEffect(() => {
    if (showModalFavorite !== null) {
      if (showModalFavorite) {
        setModalMessage(`You added ${title} to your wishlist.`);
      } else {
        setModalMessage(`You removed ${title} from your wishlist.`);
      }

      const timer = setTimeout(() => {
        setModalMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showModalFavorite]);

  const addToCart = () => {
    dispatch(addItemToCart(item));

    dispatch(toggleModalCart(true));
  };
  const addToFavorite = () => {
    dispatch(addItemToFavorite(item));
  };

  const closeModal = () => {
    dispatch(toggleFormFavorite(null));
    setModalMessage("");
  };

  const closeModalCart = () => dispatch(toggleModalCart(null));

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
          {showModalCart && (
            <div className={cl.overlay}>
              <div className={cl.wrapper}>
                <div className={cl.titleModal}>
                  <div className={cl.close}>
                    <IoMdClose onClick={closeModalCart} />
                  </div>
                  cart items
                </div>
                <div className={cl.card}>
                  {cart.map((product) => (
                    <div className={cl.item} key={product.id}>
                      <div className={cl.image}>
                        <img src={product.images[0]} alt={product.title} />
                      </div>
                      <div className={cl.info}>
                        <div className={cl.titleProduct}>{product.title}</div>
                        <div className={cl.sizeModal}>size:</div>
                        <div className={cl.priceModal}>${product.price}</div>
                        <div className={cl.amountProduct}>
                          <div className={cl.manegProduct}>
                            <ButtonDinamic
                              isPlus={false}
                              widthCircle="20px"
                              hightCircle="20px"
                              svgSize="20px"
                            />
                            total amount
                            <ButtonDinamic
                              isPlus={true}
                              widthCircle="20px"
                              hightCircle="20px"
                              svgSize="20px"
                            />
                          </div>
                          <div className={cl.deleteProduct}>
                            <AiFillDelete/>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={cl.totalModal}>
                  Grand Total <span>$ total price</span>
                </div>
                <button className={`${cl.checkout} ${cl.generalStyle}`}>proceed to checkout</button>
                <div className={cl.linkModal}>
                  <ViewAll route={ROUTES.CART}/>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={addToFavorite}
            className={`${cl.favorite} ${cl.generalStyle}`}
          >
            <span>WISHLIST</span>
            <IoIosStarOutline />
          </button>
          {modalMessage && (
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
          )}
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
