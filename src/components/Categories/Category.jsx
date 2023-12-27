import Categories from "./Categories";
import Filter from "../../components/Filter/Filter";
import Search from "../search/Search";

const Category = () => {
  return (
    <div>
      <div>
        <Filter />
      </div>
      <div>
        <Search />
        <Categories />
      </div>
    </div>
  );
};

export default Category;
