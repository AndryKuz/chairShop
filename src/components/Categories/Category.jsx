import { useSelector } from "react-redux";

import Categories from "./Categories";

import cl from '../../assets/styles/Category.module.scss';

const Category = ({activeCategoryId}) => {
  const { categories } = useSelector((state) => state);
  
  return (
    <div className={cl.category}>
      
      <Categories category={categories.list} activeCategoryId={activeCategoryId}/>
      <input type="text" />
      here products
    </div>
  );
};

export default Category;