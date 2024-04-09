
import { useDispatch } from "react-redux";
import "../../assets/styles/global.scss";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/AppRoutes";
import UserForm from "../User/UserForm";
import { useEffect } from "react";
import { getCategory } from "../../features/categories/categoriesSlice";
import {getProducts} from '../../features/products/productSlice'


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch (getCategory());
    dispatch(getProducts());
  }, [dispatch])



  return (
    <div className="wrapper">
      <Header />

      <UserForm/>
      <div className="content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
