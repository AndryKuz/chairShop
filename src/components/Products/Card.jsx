import { Link} from "react-router-dom";

import { PiCurrencyDollar } from "react-icons/pi";

import cl from "../../assets/styles/Card.module.scss";

import ButtonDinamic from "../buttons/ButtonDinamic";


const Card = ({ products = []}) => {

  return (
    
      <div className={cl.card}>
        {products.map((product) => (
          <div className={cl.item} key={product.id}>
            <div className={cl.imagesContainer}>
              <Link to={`/products/${product.id}`}>
                <img src={product.images} alt={product.name} />
              </Link>
            </div>
            <div className={cl.info}>
              {product.name}
              <Link className={cl.title}>{product.title}</Link>

            </div>
            <div className={cl.buy}>
              <div className={cl.price}>
                <PiCurrencyDollar />
                {product.price}
              </div>
              <ButtonDinamic isPlus={true}  widthCircle='40px' hightCircle='40px'/>
            </div>
          </div>
        ))}
      </div>
    
  );
};


export default Card;

// const Card = ({ title, name, image, price, description }) => {

//   // const { title, image, price, description, name } = products;

//   return (
//     <div className={cl.item}>
//       <div className={cl.imagesContainer}>
//         <Link>
//           <img src={image} alt={name} />
//         </Link>
//       </div>
//       <div className={cl.info}>
//         {name}
//         <Link className={cl.title}>{title}</Link>
//       </div>
//       <div className={cl.buy}>
//         <div className={cl.price}>
//           <PiCurrencyDollar/>
//           {price}
//         </div>
//         <ButtonDinamic isPlus={true}/>

//       </div>
//     </div>
//   );
// };

// export default Card;
