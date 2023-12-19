import { Link, NavLink } from "react-router-dom";

import cl from "../../assets/styles/Products.module.scss";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { useGetCategoriesQuery } from "../../features/categories/apiCategories";

const Products = () => {
  const { data = [] } = useGetProductQuery();
  const category = [...new Set(data.map((obj) => obj.category.name))];

  const { data: categoriesData = [] } = useGetCategoriesQuery();

  // только для того что бы не появлялись новые категории которые добавляют на серваке левые люди
  const mainCategory = categoriesData.filter((_, i) => i < 5);

  const dataLimit = data.filter((_, i) => i < 4);

  return (
    <div className={cl.cart}>
      <div className="container">
        <h3>Best Selling Product</h3>
        <div className={cl.categories}>
          {mainCategory.map((item) => (
            <div key={item.id} className={cl.but}>
              <NavLink
                className={({ isActive }) => (isActive ? "activeCategory" : "")}
              >
                {item.name}
              </NavLink>
            </div>
          ))}
        </div>
        <div className={cl.products}>
          {dataLimit.map((item) => (
            <div key={item.id} className={cl.item}>
              <div className={cl.imagesContainer}>
                <Link>
                  <img src={item.images} alt={item.category.name} />
                </Link>
              </div>
              <div className={cl.info}>
                {item.category.name}
                <Link className={cl.title}>{item.title}</Link>
              </div>
              <div className={cl.buy}>
                <div className={cl.price}>
                  <svg viewBox="0 0 9 15">
                    <path d="M3.79699 14.4096H4.94373L4.94914 13.1709C7.26967 13.0033 8.60032 11.7267 8.60573 9.91463C8.60032 7.99438 7.01544 7.1181 5.34941 6.72323L4.99241 6.63127L5.01405 3.54264C5.87951 3.6941 6.43666 4.21338 6.5232 4.9923H8.45427C8.42182 3.27218 7.06953 2.01726 5.02487 1.82253L5.03027 0.562195H3.88353L3.87812 1.82253C1.84969 2.02808 0.389214 3.27218 0.394624 5.06262C0.394624 6.65291 1.52514 7.56706 3.34803 8.03766L3.83485 8.16207L3.81321 11.4346C2.84497 11.2832 2.14719 10.7314 2.07687 9.75236H0.102529C0.178257 11.7808 1.57382 12.987 3.80239 13.1709L3.79699 14.4096ZM4.95996 11.4346L4.98159 8.46498C5.96606 8.75167 6.59352 9.13031 6.59893 9.89841C6.59352 10.699 5.94983 11.2723 4.95996 11.4346ZM3.84567 6.33918C3.0992 6.10118 2.41765 5.70631 2.42847 4.93821C2.43388 4.24042 2.95857 3.69951 3.86731 3.54264L3.84567 6.33918Z" />
                  </svg>
                  {item.price}
                </div>
                <div className={cl.circleWrapper}>
                  <Link>
                    <svg width="21" height="20" viewBox="0 0 21 20">
                      <path d="M20.1342 10.2102C20.1342 9.44107 19.5107 8.81756 18.7416 8.81756H11.7783V1.85427C11.7783 1.08512 11.1547 0.461609 10.3856 0.461609C9.61646 0.461609 8.99294 1.08512 8.99294 1.85427V8.81756H2.02965C1.26051 8.81756 0.636993 9.44107 0.636993 10.2102C0.636993 10.9794 1.26051 11.6029 2.02965 11.6029H8.99294V18.5662C8.99294 19.3353 9.61646 19.9588 10.3856 19.9588C11.1547 19.9588 11.7783 19.3353 11.7783 18.5662V11.6029H18.7416C19.5107 11.6029 20.1342 10.9794 20.1342 10.2102Z" />
                    </svg>
                  </Link>
                  <span className={cl.cirlce}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="button">
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
