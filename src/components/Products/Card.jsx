import { Link } from "react-router-dom";

import { PiCurrencyDollar } from "react-icons/pi";

import cl from "../../assets/styles/Card.module.scss";


const Card = ({ products = [], flexNoWrap }) => {
  

  return (
    <div className={`${cl.card} ${flexNoWrap === 'nowrap' ? cl.nowrap : ''}`}>
      {products.map((item) => (
        <div className={cl.item} key={item.id}>
          <div className={cl.imagesContainer}>
            <Link to={`/products/${item.id}`}>
              <img src={item.images} alt={item.name} />
            </Link>
          </div>
          <div className={cl.info}>
            {item.name}
            <Link to={`/products/${item.id}`} className={cl.title}>{item.title}</Link>
          </div>
          <div className={cl.buy}>
            <div className={cl.price}>
              <PiCurrencyDollar />
              {item.price}
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
