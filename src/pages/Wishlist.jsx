import { useDispatch, useSelector } from "react-redux";
import cl from "../../src/assets/styles/Wishlist.module.scss";
import ButtonDinamic from "../components/buttons/ButtonDinamic";
import { addItemToCart } from "../components/modal/modalSlice";
import { AiFillDelete } from "react-icons/ai";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { favorite } = useSelector((state) => state.modal);
  console.log(favorite);

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }));
  };

  return (
    <section>
      <div className="container">
        <div className={cl.mainContent}>
          <div className={cl.title}>Wishlist</div>
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
                const { title, images, price, id, quantity} = prod;

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
                      <span>{quantity}</span>
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
                    <div className={cl.subtotalProd}></div>
                    <div className={cl.removeProd}>
                      <AiFillDelete />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={cl.final}>
              <div>
                <button> Empty Wishlist</button>
              </div>
              <div>
                <button>Add All To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
