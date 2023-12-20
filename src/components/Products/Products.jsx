import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

import Card from "./Card";
import Category from "./Category";

import { useGetProductQuery } from "../../features/api/apiSlice";

import style from '../../assets/styles/Swiper.module.scss';
import cl from "../../assets/styles/Products.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";



const Products = () => {
  const { data = [] } = useGetProductQuery();
  

  return (
    <div className={cl.cart}>
      <div className="container">
        <div className={cl.wrapper}>

        </div>
        <h3>Best Selling Product</h3>
        <Category />
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={4}
          navigation
          className={style.swiperWrapper}
          
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                title={item.title}
                name={item.category.name}
                image={item.images[0]}
                price={item.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="button but-prod">
          <Link>View All</Link>
          <svg viewBox="0 0 39 13">
            <path d="M0.5 6.40024H38M38 6.40024C38 6.40024 33.5119 3.44867 32.6 1.00024M38 6.40024C38 6.40024 34.0324 9.17362 32.6 11.8002" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Products;
