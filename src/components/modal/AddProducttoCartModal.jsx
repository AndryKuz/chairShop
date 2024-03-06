import { ROUTES } from "../../utils/routes";
import ViewAll from "../buttons/ViewAll";

import { AiFillDelete } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import cl from "./AddProductToCart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, toggleModalCart } from "../modal/modalSlice";
import { sumBy } from "lodash";
import ProductController from "../common/ProductController";

const AddProductToCart = ({ classButton }) => {
  const dispatch = useDispatch();
  const { cart, showModalCart } = useSelector((state) => state.modal);

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };
  const closeModalCart = () => dispatch(toggleModalCart(null));

  const handleDeleteItem = (id) => {
    if (cart.length === 1) {
      removeItem(id);
    } else {
      removeItem(id);
    }
  };

  return (
    <>
      <div className={cl.overlay} onClick={closeModalCart} />
      <div
        className={`${cl.wrapper} ${showModalCart ? cl.wrapperAnimation : ""}`}
      >
        <div className={cl.titleModal}>
          <div className={cl.close}>
            <IoMdClose onClick={closeModalCart} />
          </div>
          cart items
        </div>
        {cart.length === 0 ? (
          <div className={cl.emptyModalCart}>
            You have no items in your shopping cart.
          </div>
        ) : (
          <>
            <div className={cl.card}>
              {cart.map((prod) => {
                const { title, images, price, id, quantity, size } = prod;

                return (
                  <div className={cl.item} key={id}>
                    <div className="image">
                      <img src={images[0]} alt={title} />
                    </div>
                    <div className={cl.info}>
                      <div className={cl.titleProduct}>{title}</div>
                      <div className={cl.sizeModal}>size: {size}</div>
                      <div className={cl.priceModal}>${price}</div>
                      <div className={cl.manageProduct}>
                        <ProductController prod={prod} />
                        <div
                          className={cl.deleteProduct}
                          onClick={() => handleDeleteItem(prod.id)}
                        >
                          <AiFillDelete />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={cl.totalModal}>
              Grand Total
              <div className={cl.totalPrice}>
                <div>$</div>
                <span>
                  {sumBy(cart.map(({ price, quantity }) => price * quantity))}{" "}
                </span>
              </div>
            </div>
            <button className={`${cl.checkout} ${classButton}`}>
              proceed to checkout
            </button>
            <div className={cl.linkModal} onClick={closeModalCart}>
              <ViewAll route={ROUTES.CART} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AddProductToCart;
