import { NavLink } from "react-router-dom";

import cl from '../../assets/styles/Products.module.scss';

import { useGetCategoriesQuery } from "../../features/categories/apiCategories";

const Category = () => {

    const { data = [] } = useGetCategoriesQuery();
  // const category = [...new Set(data.map((obj) => obj.category.name))];


  // только для того что бы не появлялись новые категории которые добавляют на серваке левые люди
  const mainCategory = data.filter((_, i) => i < 5);
  return (
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
  );
};

export default Category;