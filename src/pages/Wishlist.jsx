import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from "../../src/assets/styles/Wishlist.module.scss";
import {
  removeItemFromFavorite,
} from "../components/modal/modalSlice";
import { AiFillDelete } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import ModalCenter from "../components/modal/ModalCenter";
import SizeSelection from "../components/modal/SizeSelection";
import ProductController from "../components/common/ProductController";

const Wishlist = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [modalAddToCart, setModalAddToCart] = useState(false);
  const [actionType, setActionType] = useState("");
  const { favorite } = useSelector((state) => state.modal);

  const removeItem = (id) => {
    dispatch(removeItemFromFavorite(id));
  };

  const showModal = (type) => {
    setActionType(type);
    setIsVisible(true);
  };
  const hideModal = () => {
    setIsVisible(false);
  };

  const showModalAddToCart = () => {
    setModalAddToCart(true);
  }

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
                        <ProductController prod={prod} sourceComponent={'wishlist'}/>
                      </div>
                      <div className={cl.subtotalProd}>
                        $ {price * quantity}
                      </div>
                      <div className={cl.addRemove}>
                        <div className={cl.cartAddWithFav} onClick={showModalAddToCart}>
                          <BsCart4 />
                          <div className={cl.tooltip}>Add to Cart</div>
                        </div>
                        {modalAddToCart && <SizeSelection prod={prod} setModalAddToCart={setModalAddToCart}/>}
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
