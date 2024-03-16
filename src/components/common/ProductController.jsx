import { useDispatch } from "react-redux";
import ButtonDinamic from "../buttons/ButtonDinamic";
import cl from "./ProductController.module.scss";
import { addItemToCart, addItemToFavorite } from "../modal/modalSlice";

const ProductController = ({ prod, sourceComponent }) => {
  const dispatch = useDispatch();
  const changeQuantity = (item, quantity) => {
    if(sourceComponent === 'addProduct') {
      dispatch(addItemToCart({ ...item, quantity }));

    } else if (sourceComponent === 'wishlist') {
      dispatch(addItemToFavorite({...item, quantity}))
    }
    
  };
  return (
    <div className={cl.amountProduct}>
      <div
        // className={cl.minus}
        onClick={() => changeQuantity(prod, Math.max(1, prod.quantity - 1))}
      >
        <ButtonDinamic
          isPlus={false}
          widthCircle="20px"
          hightCircle="20px"
          svgSize="20px"
        />
      </div>
      <span>{prod.quantity}</span>
      <div
        // className={cl.plus}
        onClick={() => changeQuantity(prod, Math.max(1, prod.quantity + 1))}
      >
        <ButtonDinamic
          isPlus={true}
          widthCircle="20px"
          hightCircle="20px"
          svgSize="20px"
        />
      </div>
    </div>
  );
};

export default ProductController;
