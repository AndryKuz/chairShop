import { useGetProductsQuery } from "../../features/api/apiSlice";
import { randomProducts } from "../utils/common";
import Card from "./Card";

const RecentlyViewed = (id) => {
  const { data = [], isSuccess } = useGetProductsQuery();

  const shuffle = randomProducts(data, 4, id);



  return (
    <div className='container'>
      <div className="title">Recently viewed</div>
      {isSuccess ? <Card products={shuffle} /> : <></>}
    </div>
  );
};

export default RecentlyViewed;
