import Card from "./Card";
import ViewAll from "../buttons/ViewAll";

import { useGetProductsQuery } from "../../features/api/apiSlice";
import { ROUTES } from "../../utils/routes";

import cl from "../../assets/styles/Products.module.scss";

import { randomProducts } from "../utils/common";

const Products = () => {
  const { data = [], isSuccess } = useGetProductsQuery();

  const shuffle = randomProducts(data, 8);

  return (
    <section className={cl.products}>
      <div className={cl.containerProd}>
        <div className={cl.contentProducts}>
          {isSuccess ? <Card products={shuffle} /> : <></>}
          <ViewAll route={ROUTES.FURNITURE} />
        </div>
      </div>
    </section>
  );
};

export default Products;
