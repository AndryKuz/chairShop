import { useEffect, useRef, useState } from "react";
import cl from "../../assets/styles/Main.module.scss";

import { IoSearchOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import { Link } from "react-router-dom";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const { data, isLoading } = useGetProductsQuery({ title: searchValue });


  const handleFocus = () => {
    setIsModalOpen(true);

  }
  const handleBlur = () => {
    setTimeout(() => {  // костыль на закрытие модального окна с результатом поиска при клике на любом другом месте кроме инпута
      setIsModalOpen(false);
    }, 500)
    

  }
  const handleChange = ({ target: { value } }) => {
    setSearchValue(isModalOpen ? value : '');
  };

  const handleReset = () => {
    setSearchValue("");
  };



  return (
    <section className={cl.main}>
      <div className="container">
        <div className={cl.mainContent}>
          <div className={cl.titleContainer}>
            <h1 className={cl.title}>
              Make your interior more minimalistic & modern
            </h1>
          </div>
          <div className={cl.subtitleContainer}>
            <h4 className={cl.subtitle}>
              Turn your room with panto into a lot more minimalist and modern
              with ease and speed
            </h4>
          </div>
          <form className={cl.form}>
            <div className={cl.input}>
              <input
                type="text"
                placeholder="Search..."
                name="search"
                autoComplete="off"
                value={searchValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className={cl.search}>
              <IoSearchOutline />
            </div>
            <div className={cl.resetSearch}>
              <TiDeleteOutline onClick={handleReset}/>
            </div>
            {isModalOpen && searchValue && (
              <div className={cl.modalSearch} ref={modalRef}>
                {isLoading
                  ? "loading"
                  : !data.length
                  ? "no result"
                  : data.map(({ title, images, id }) => {
                      return (
                        <Link
                          className={cl.item}
                          to={`/products/${id}`}
                          key={id}
                        >
                          <div
                            className={cl.imageSearch}
                            style={{ backgroundImage: `url(${images[0]})` }}
                          ></div>
                          <div className={cl.titleSearch}>{title}</div>
                        </Link>
                      );
                    })}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Main;
