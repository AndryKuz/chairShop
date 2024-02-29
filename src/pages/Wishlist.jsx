import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from "../../src/assets/styles/Wishlist.module.scss";
import ButtonDinamic from "../components/buttons/ButtonDinamic";
import {
  addItemToFavorite,
  removeItemFromFavorite,
} from "../components/modal/modalSlice";
import { AiFillDelete } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import ModalCenter from "../components/modal/ModalCenter";

const Wishlist = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [actionType, setActionType] = useState("");
  const { favorite } = useSelector((state) => state.modal);

  const removeItem = (id) => {
    dispatch(removeItemFromFavorite(id));
  };

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToFavorite({ ...item, quantity }));
  };

  const showModal = (type) => {
    setActionType(type);
    setIsVisible(true);
  };
  const hideModal = () => {
    setIsVisible(false);
  };

  return (
    <section>
      <div className="container">
        <div className={cl.mainContent}>
          <div className={cl.title}>Wishlist</div>
          {favorite.length === 0 ? (
            <div>You have no items in your wishlist.</div>
          ) : (
            <div className={cl.productWishlist}>
              <div className={cl.descriptionItem}>
                <div className={cl.empty}></div>
                <div className={cl.prodDes}>Product</div>
                <div className={cl.priceDes}>Price</div>
                <div className={cl.qtyDes}>Qty</div>
                <div className={cl.subtotalDes}>Subtotal</div>
                <div className={cl.empty}></div>
              </div>
              <div className={cl.cardWishlist}>
                {favorite.map((prod) => {
                  const { title, images, price, id, quantity } = prod;

                  return (
                    <div className={cl.itemWishlist} key={id}>
                      <div className={cl.imageProd}>
                        <img src={images[0]} alt={title} />
                      </div>
                      <div className={cl.titleProd}>{title}</div>
                      <div className={cl.priceProd}>{price}</div>
                      <div className={cl.quantityProd}>
                        <div
                          className={cl.minus}
                          onClick={() =>
                            changeQuantity(prod, Math.max(1, quantity - 1))
                          }
                        >
                          <ButtonDinamic
                            isPlus={false}
                            widthCircle="20px"
                            hightCircle="20px"
                            svgSize="20px"
                          />
                        </div>
                        <span className={cl.quantityWishlist}>{quantity}</span>
                        <div
                          className={cl.plus}
                          onClick={() =>
                            changeQuantity(prod, Math.max(1, quantity + 1))
                          }
                        >
                          <ButtonDinamic
                            isPlus={true}
                            widthCircle="20px"
                            hightCircle="20px"
                            svgSize="20px"
                          />
                        </div>
                      </div>
                      <div className={cl.subtotalProd}>
                        $ {price * quantity}
                      </div>
                      <div className={cl.addRemove}>
                        <div className={cl.cartAddWithFav}>
                          <BsCart4 />
                          <div className={cl.tooltip}>Add to Cart</div>
                        </div>
                        <div
                          className={cl.removeProd}
                          onClick={() => removeItem(id)}
                        >
                          <AiFillDelete />
                          <div className={cl.tooltip}>Delete</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={cl.final}>
                <button onClick={() => showModal("clearWishlist")}>
                  {" "}
                  empty wishlist
                </button>
                <button onClick={() => showModal("addAllToCart")}>
                  add all to cart
                </button>
                {isVisible && (
                  <ModalCenter onHide={hideModal} actionType={actionType} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
