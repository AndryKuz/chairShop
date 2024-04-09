import Main from "../components/Main/Main";
import AboutUs from "../components/AboutUs/AboutUs";
import { useSelector } from "react-redux";
import Categories from "../components/Categories/Categories";
import cl from "../assets/styles/Home.module.scss";
import Slider from "../components/Carousel/Slider";

const Home = () => {
  const { list } = useSelector((state) => state.categories);
  

  return (
    <>
      <Main />
      <AboutUs />
      <section className={cl.products}>
        <div className="container">
          <div className={cl.title}>
            <div>
              <h3>Best Selling Product</h3>
              <div className={cl.category}>
                <Categories category={list} />
              </div>
              <Slider/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
