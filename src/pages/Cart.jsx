import { useDispatch, useSelector } from "react-redux";
import cl from "../assets/styles/Cart.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import ProductController from "../components/common/ProductController";
import { useState } from "react";
import ModalCenter from "../components/modal/ModalCenter";
import { sumBy } from "lodash";
import { MdKeyboardArrowDown} from "react-icons/md";
import {
  addItemToFavorite,
  removeItemFromCart,
} from "../components/modal/modalSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.modal);
  const [isVisibleModal, setIsVisibleModal] = useState("");
  const [actionType, setActionType] = useState("");
  const [valueInput, setValueInput] = useState('');

  const showModal = (type) => {
    setActionType(type);
    setIsVisibleModal(true);
  };

  const hideModal = () => {
    setIsVisibleModal(false);
  };
  const totalSum = sumBy(
    cart.map(({ price, quantity }) => price * quantity, 0)
  );

  const deleteItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const addItemFromCartToFavorite = (prod) => {
    dispatch(addItemToFavorite(prod));
    deleteItem(prod.id);
  };

  const handleChange = ({target: {value}}) => {
    setValueInput(value);
  }

  return (
    <>
      {cart.length === 0 ? (
        <div className={cl.emptySection}>empty</div>
      ) : (
        <section className={cl.cart}>
          <div className="container">
            <div className="title">
              <h4>CART</h4>
            </div>
            <div className={cl.main}>
              <div className={cl.cards}>
                {cart.map((prod) => {
                  const { title, images, price, id, quantity } = prod;
                  return (
                    <div className={cl.item} key={id}>
                      <div className={cl.itemInfo}>
                        <div className="image">
                          <img src={images[0]} alt={title} />
                        </div>
                        <div className={cl.title}>{title}</div>
                        <div className={cl.count}>
                          <ProductController
                            prod={prod}
                            sourceComponent={"addProduct"}
                          />
                        </div>
                        <div
                          className="parrent-tooltip"
                          onClick={() => addItemFromCartToFavorite(prod)}
                        >
                          <FaRegHeart />
                          <div className="tooltip">Add to wishlist</div>
                        </div>
                        <div
                          className="parrent-tooltip"
                          onClick={() => deleteItem(id)}
                        >
                          <AiFillDelete />
                          <div className="tooltip">Delete</div>
                        </div>
                      </div>
                      <div className={cl.priceSubtotal}>
                        <div className={cl.price}>
                          <span>Price</span>
                          <span>$ {price}</span>
                        </div>
                        <div className={cl.subTotal}>
                          <span>Subtotal</span>
                          <span>$ {price * quantity}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div
                  className={cl.buttonEmpty}
                  onClick={() => showModal("clearAllCart")}
                >
                  <button>Empty Cart</button>
                </div>
                {isVisibleModal && (
                  <ModalCenter onHide={hideModal} actionType={actionType} />
                )}
              </div>
              <div className={cl.summary}>
                <div className={cl.cupon}>
                  <div>coupon cod</div>
                  <div>
                    <MdKeyboardArrowDown />
                  </div>
                </div>
                <div className={cl.accordion}>
                  <div>
                    <input 
                    type="text"
                    name="cupon"
                    placeholder="Cupon code*"
                    value={valueInput}
                    autoComplete="off"
                    onChange={handleChange} />
                  </div>
                  <div className={cl.butApply}>
                    <button  className={`button-dis ${cl.buttonActive}`} disabled={!valueInput}>Apply</button>
                  </div>
                  
                </div>
                <h5>summary</h5>
                <div className={cl.subtotalTax}>
                  <div>Subtotal (incl. tax)</div>
                  <div>$ {totalSum}</div>
                </div>
                <div className={cl.shippingPrice}>
                  <div>Shipping (incl. tax)</div>
                  <div>Not calculated yet</div>
                </div>
                <div className={cl.orderTotal}>
                  <div>Order total</div>
                  <div>$ {totalSum}</div>
                </div>
                <div className={cl.proceedButton}>
                  <button>proceed to chceckout</button>
                </div>
                <div className={cl.info}>
                  <h3>DO YOU NEED HELP?</h3>
                  <p>
                    Write to our customer service. We are at your disposal from
                    Monday to Friday from 8:30 - 13:00 and from 14:30 -
                    18:00(CET)
                  </p>
                </div>
                <div className={cl.info}>
                  <h3>SHIPPING in 24-48H</h3>
                  <p>
                    Make your purchase easily from home! Quick delivery within
                    24-48H for all articles.
                  </p>
                </div>
                <div className={cl.info}>
                  <h3>SECURE PURCHASE</h3>
                  <p>
                    Choose your preferred method of payment. The highest
                    security for your online payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
