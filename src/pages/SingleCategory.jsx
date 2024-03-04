import Filter from "../components/Filter/Filter";

import cl from "../assets/styles/SingleCategory.module.scss";

import { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../features/api/apiSlice";
import Card from "../components/Products/Card";
import { useSelector } from "react-redux";

const SingleCategory = () => {
  const { id } = useParams();
  const inputRef = useRef(null);
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: "",
    price_min: '',
    price_max: '',
  };

  const defaultParams = {
    categoryId: id,
    ...defaultValues,
  };

  const [cat, setCat] = useState(null);
  const [params, setParams] = useState(defaultParams);
  const [values, setValues] = useState(defaultValues);
  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

  // передаю полученнные параметры в State( в первом случае это полученный id из useParams
  // а сам State передаст в useGetProductsQuery(params) и в data я должен получить только те торы у которых id == list.id)
  useEffect(() => {
    if (!id) return;

    setValues(defaultValues);
    setParams(defaultParams);
    // eslint-disable-next-line
  }, [id]);

  // вытаскиваю название категории для title над товарами конкретной категории
  useEffect(() => {
    if (!id || !list.length) return;

    const categoryName = list.find((item) => item.id === Number(id));

    setCat(categoryName);
  }, [id, list]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedParams = {
      ...defaultParams,
      title: values.title,
      ...(values.price_min !== '' && {price_min: values.price_min}),
      ...(values.price_max !== '' && {price_min: values.price_max}),
    };

    setParams(updatedParams);
  };

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
    setParams({...params, [name]: value});
    
  };

  const handleResetAll = () => {
    setValues(defaultValues);
    setParams(defaultParams);
  };

 const handleResetInput = (inputName) => {
  setValues({...values, [inputName]: ''});
  setParams({...params, [inputName]: ''});

  if(inputRef.current) {
    inputRef.current.focus();
  }
 }


  return (
    <section>
      <div className="container">
        <div className={cl.mainCont}>
          <div className={cl.filter}>
            <Filter
              category={list}
              id={id}
              values={values}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleResetInput={handleResetInput}
              handleResetAll={handleResetAll}
              inputRef={inputRef}
           
            />
          </div>
          <div className={cl.singleCatagory}>
            <h2 className='title'>{cat?.name}</h2>
            {isLoading ? (
              <div className={cl.loadProduct}>Loading....</div>
            ) : !isSuccess || !data.length ? (
              <div>
                <span>no result</span>
                <button onClick={handleResetAll}>Reset</button>
              </div>
            ) : (
              <Card products={data} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCategory;
