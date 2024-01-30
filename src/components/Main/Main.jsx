import cl from "../../assets/styles/Main.module.scss";

import { IoSearchOutline } from "react-icons/io5";


const Main = () => {

  const handleChange = () => {

  }
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
                placeholder="Search furniture"
                name="search"
                autoComplete="off"
                value=""
                onChange={handleChange}
              />
            </div>
            <div className={cl.search}>
              <IoSearchOutline />
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
              </svg> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Main;