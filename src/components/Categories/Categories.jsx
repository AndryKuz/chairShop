import cl from '../../assets/styles/Categories.module.scss';


const Categories = () => {
  return (
    <div className={cl.categories}>
          {/* {mainCategory.map((item) => (
            <div key={item.id} className={cl.but}>
              <NavLink
                className={({ isActive }) => (isActive ? "activeCategory" : "")}
              >
                {item.name}
              </NavLink>
            </div>
          ))} */}
        </div>
  );
};

export default Categories;