import { useNavigate, useParams } from "react-router-dom";
import Product from "../components/Products/Product";
import { useGetProductQuery } from "../features/api/apiSlice";
import { useEffect } from "react";
import { ROUTES } from "../utils/routes";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isError } = useGetProductQuery({ id });

  useEffect(() => {
    if (isError) {
      navigate(ROUTES.HOME);
    }
  }, [isError, navigate]);

  useEffect(() => {
    if (!data) return;
  }, []);

  return !data ? (
    <section>Loading...</section>
  ) : (
    <>
      <Product {...data} />
    </>
  );
};

export default SingleProduct;
