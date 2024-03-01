import { useSelector } from "react-redux";
import cl from "./SizeSelection.module.scss";
import { SIZES } from "../Products/Product";
import { IoMdClose } from "react-icons/io";

const SizeSelection = ({item}) => {
    // item должен содержать в себе обьект с данными о товаре
  const { favorite } = useSelector((state) => state.modal);

  return (
    <div className="overlay">
      <div className={cl.sizeModalWrapper}>
        <IoMdClose/>
        <div className={cl.sizeChoose}>
          {SIZES.map((size) => (
            <div className={cl.size} key={size}>
              {size}
            </div>
          ))}
        </div>
        <div className={cl.itemAddToCart}>
            <div className={cl.cardItem}>
                <div className={cl.imageItem}><img src={item.images[0]} alt={item.title} /></div>
                <div className={cl.priceItem}>$ {item.price}</div>
            </div>
            <button>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SizeSelection;
