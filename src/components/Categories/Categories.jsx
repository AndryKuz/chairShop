import { NavLink, useParams } from "react-router-dom";
import cl from "../../assets/styles/Categories.module.scss";

const Categories = ({ category }) => {
  const noMoreCategoryFive = category.slice(0, 5);
  

  if (!category || !Array.isArray(category)) {
    return <div>No data or invalid data format</div>;
  }

  return (
    <nav>
      <ul className={cl.menu}>
        {noMoreCategoryFive.map(({ id, name }) => {
          return (
            <li
              key={id}
              className={cl.listCat}
            >
              <div className={cl.bgCat}>
                <NavLink className={cl.link} to={`categories/${id}`}>
                  {name}
                </NavLink>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Categories;
