import { Link } from "react-router-dom";

import { PiCurrencyDollar } from "react-icons/pi";

import cl from "../../assets/styles/Products.module.scss";

import ButtonDinamic from "../buttons/ButtonDinamic";


const Card = ({ title, name, image, price }) => {
  
  return (
    <div className={cl.item}>
      <div className={cl.imagesContainer}>
        <Link>
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className={cl.info}>
        {name}
        <Link className={cl.title}>{title}</Link>
      </div>
      <div className={cl.buy}>
        <div className={cl.price}>
          <PiCurrencyDollar/>
          {price}
        </div>
        <ButtonDinamic isPlus={true}/>
      </div>
    </div>
  );
};

export default Card;
