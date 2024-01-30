import Main from "../components/Main/Main";
import AboutUs from "../components/AboutUs/AboutUs";
import Products from "../components/Products/Products";
import { useSelector } from "react-redux";
import { useGetProductQuery } from "../features/api/apiSlice";
import Categories from "../components/Categories/Categories";
import cl from "../assets/styles/Home.module.scss";

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
            </div>
          </div>
          <Products/>
        </div>
      </section>
    </>
  );
};

export default Home;
