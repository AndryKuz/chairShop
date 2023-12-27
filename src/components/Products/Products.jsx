import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "./Card";
import ViewAll from "../buttons/ViewAll";

import { useGetProductQuery } from "../../features/api/apiSlice";
import { ROUTES } from "../../utils/routes";

import cl from "../../assets/styles/Products.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Products = () => {
  const { data = [] } = useGetProductQuery();

  console.log(data);
  return (
    <section className={cl.products}>
      <div className={cl.containerProd}>
        <div className={cl.contentProducts}>
          <h3>Best Selling Product</h3>

          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            
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
          <ViewAll route={ROUTES.FURNITURE} />
        </div>
      </div>
    </section>
  );
};

export default Products;
