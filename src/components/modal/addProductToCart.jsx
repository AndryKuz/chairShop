import { ROUTES } from "../../utils/routes";
import ButtonDinamic from "../buttons/ButtonDinamic";
import ViewAll from "../buttons/ViewAll";

import { AiFillDelete } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import cl from "./AddProductToCart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, toggleModalCart } from "../User/userSlice";

const AddProductToCart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.user);

  const totalPrice = cart.reduce((acc, prod) => acc + prod.price, 0);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({...item, quantity}))
    console.log('click quantity');
  };

  const closeModalCart = () => dispatch(toggleModalCart(null));
  return (
    <div className={cl.overlay}>
      <div className={cl.wrapper}>
        <div className={cl.titleModal}>
          <div className={cl.close}>
            <IoMdClose onClick={closeModalCart} />
          </div>
          cart items
        </div>
        <div className={cl.card}>
          {cart.map((prod) => {
            const { title, images, price, id, quantity } = prod;

            return (
              <div className={cl.item} key={id}>
                <div className={cl.image}>
                  <img src={images[0]} alt={title} />
                </div>
                <div className={cl.info}>
                  <div className={cl.titleProduct}>{title}</div>
                  <div className={cl.sizeModal}>size:</div>
                  <div className={cl.priceModal}>${price}</div>
                  <div className={cl.amountProduct}>
                    <div className={cl.manegProduct}>
                      <ButtonDinamic
                        onClick={() => changeQuantity(prod, Math.max(1, quantity - 1))}
                        isPlus={false}
                        widthCircle="20px"
                        hightCircle="20px"
                        svgSize="20px"
                      />
                      <span>{quantity}</span>
                      <ButtonDinamic
                        onClick={() => changeQuantity(prod, Math.max(1, quantity + 1))}
                        isPlus={true}
                        widthCircle="20px"
                        hightCircle="20px"
                        svgSize="20px"
                      />
                    </div>
                    <div className={cl.deleteProduct}>
                      <AiFillDelete />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={cl.totalModal}>
          Grand Total <span>${totalPrice} total price</span>
        </div>
        <button className={`${cl.checkout} ${cl.generalStyle}`}>
          proceed to checkout
        </button>
        <div className={cl.linkModal}>
          <ViewAll route={ROUTES.CART} />
        </div>
      </div>
    </div>
  );
};

export default AddProductToCart;
