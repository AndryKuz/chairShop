import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y  } from "swiper/modules";

import Card from "./Card";
import Category from "./Category";

import { useGetProductQuery } from "../../features/api/apiSlice";

import style from "../../assets/styles/Swiper.module.scss";
import cl from "../../assets/styles/Products.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";

const Products = () => {
  const { data = [] } = useGetProductQuery();
  console.log(data);

  return (
    <section className={cl.products}>
      <div className={cl.containerProd}>
        <div className={cl.contentProducts}>
          <h3>Best Selling Product</h3>
          <Category />
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={10}
            slidesPerView={4}
            navigation
            className={style.mySwiper}
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
            {/* <div className="swiper-button-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 21 15"
                  fill="none"
                >
                  <path
                    d="M19.6958 7.43548H2.48568M2.48568 7.43548C2.48568 7.43548 7.36397 4.22725 8.35524 1.56592M2.48568 7.43548C2.48568 7.43548 6.79826 10.45 8.35524 13.305"
                    stroke="#1E1E1E"
                    stroke-width="2.17391"
                    stroke-linecap="square"
                  />
                </svg>
              </div>
              <div className="swiper-button-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 21 15"
                  fill="none"
                >
                  <path
                    d="M1.30417 7.43548H18.5143M18.5143 7.43548C18.5143 7.43548 13.636 4.22725 12.6447 1.56592M18.5143 7.43548C18.5143 7.43548 14.2017 10.45 12.6447 13.305"
                    stroke="#1E1E1E"
                    stroke-width="2.17391"
                    stroke-linecap="square"
                  />
                </svg>
              </div> */}
          </Swiper>
          <div className="button but-prod">
            <Link>View All</Link>
            <svg viewBox="0 0 39 13">
              <path d="M0.5 6.40024H38M38 6.40024C38 6.40024 33.5119 3.44867 32.6 1.00024M38 6.40024C38 6.40024 34.0324 9.17362 32.6 11.8002" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
