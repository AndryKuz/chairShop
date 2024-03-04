import { useSelector } from "react-redux";
import cl from "../assets/styles/Cart.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

const Cart = () => {
  const { cart } = useSelector((state) => state.modal);

  return (
    <section className={cl.cart}>
      <div className="container">
        <div className='title'>CART</div>
        <div className={cl.main}>
          <div className={cl.cards}>
            <div className={cl.cardItem}>
              {cart.map((prod) => {
                const { title, images, price, id, quantity, size } = prod;
                return (
                  <div className={cl.item} key={id}>
                    <div className={cl.image}>
                      <img src={images[0]} alt={title} />
                    </div>
                    <div className={cl.title}>{title}</div>
                    <div className={cl.count}></div>
                    <div className={cl.addWishlist}>
                      <FaRegHeart/>
                    </div>
                    <div className={cl.removeItem}>
                      <BsCart4/>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className={cl.priceSubtotal}>
              <div className={cl.price}>
                <span>Price</span>
                <span>$620</span>
              </div>
              <div className={cl.subTotal}>
                <span>Subtotal</span>
                <span>$3903</span>
              </div>
            </div>
            <div className={cl.buttonEmpty}>
              <button>Empty Cart</button>
            </div>
          </div>
          <div className={cl.summary}></div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
