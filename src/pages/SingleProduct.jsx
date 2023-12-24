import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


import Product from "../components/Products/Product";

import { useGetProductQuery } from "../features/api/apiSlice";



const SingleProduct = () => {

  
  
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data = [], isLoading, isFetching, isError } = useGetProductQuery({id});
  

  // если не пройдет загрузка данных, то navigate вернет нас на домашнюю страницу(ROUTES.HOME)
  // useEffect(() => {
  //     if(!isFetching && !isLoading && !isError) {
  //       navigate(ROUTES.HOME)
  //     }
  // },[isLoading, isFetching, isError])


  // useEffect(() => {
  //   if (!data) return;

  // })
  return (
    <Product {...data}/>
  );
};

export default SingleProduct;
