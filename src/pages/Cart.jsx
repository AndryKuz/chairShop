import { useSelector } from "react-redux";
import cl from "../assets/styles/Cart.module.scss";

const Cart = () => {

  const {cart} = useSelector((state) => state.modal);
  console.log(cart);
  return (
    <section>
      <div className="container">
        <div>CART</div>
        <div className={cl.main}>
          <div className={cl.cards}></div>
          <div className={cl.summary}></div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
