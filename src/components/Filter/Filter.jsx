import { NavLink } from "react-router-dom";

import cl from "../../assets/styles/Filter.module.scss";

import { TiDeleteOutline } from "react-icons/ti";

const Filter = ({
  category = [],
  id,
  values,
  handleChange,
  handleSubmit,
  handleResetInput,
  handleResetAll,
  inputRef,
}) => {
  const noMoreFiveCategory = category.slice(0, 5);

  return (
    <section className={cl.filter}>
      <nav>
        <ul className={cl.menu}>
          {noMoreFiveCategory.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  to={`/categories/${item.id}`}
                  className={`${cl.linkNav} ${
                    item.id === +id ? cl.activeLinkSideBar : ""
                  }`}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <h4>Filter products</h4>
      <form className={cl.filters} onSubmit={handleSubmit}>
        <div className={cl.filter}>
        <span>Name products</span>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Product name"
            value={values.title}
            autoComplete="off"
            ref={inputRef}
          />
          <div
            className={cl.clearValueInput}
            onClick={() => handleResetInput("title")}
          >
            <TiDeleteOutline />
          </div>
        </div>
        <div className={cl.filter}>
          <span>Price from</span>
          <input
            type="number"
            name="price_min"
            onChange={handleChange}
            placeholder="0"
            value={values.price_min}
            autoComplete="off"
            
          />
          <div
            className={cl.clearValueInput}
            onClick={() => handleResetInput("price_min")}
          >
            <TiDeleteOutline />
          </div>
        </div>
        <div className={cl.filter}>
          <span>Price to</span>
          <input
            type="number"
            name="price_max"
            onChange={handleChange}
            placeholder="0"
            value={values.price_max}
            autoComplete="off"
            
          />
          <div
            className={cl.clearValueInput}
            onClick={() => handleResetInput("price_max")}
          >
            <TiDeleteOutline />
          </div>
        </div>
        <button  className={cl.buttonReset} onClick={handleResetAll}>Reset all filter</button>

        <button type="submit" hidden />
      </form>
    </section>
  );
};

export default Filter;
