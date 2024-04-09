import { useGetProductsQuery } from "../../features/api/apiSlice";
import Card from "../Products/Card";
import cl from "./Slider.module.scss";

import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";


const Carousel = () => {
  const { data = [] } = useGetProductsQuery();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    
  };

  return (
    <div className={cl.wrapper}>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className={cl.itemSlide}>
            <Card products={[item]} flexNoWrap={"nowrap"} />
          </div>
        ))}

      </Slider>

    </div>
  );
};

export default Carousel;
