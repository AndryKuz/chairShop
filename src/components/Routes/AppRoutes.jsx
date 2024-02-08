import { Routes, Route } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import Home from '../../pages/Home';
import About from '../../pages/About';
import Contacts from '../../pages/Contacts';
import Cart from '../../pages/Cart';
import NotFound from '../../pages/NotFound';
import SingleCategory from "../../pages/SingleCategory";
import SingleProduct from "../../pages/SingleProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={ROUTES.ABOUT} element={<About/>}/>
      <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
      <Route path={ROUTES.CONTACTS} element={<Contacts/>}/>
      <Route path={ROUTES.CART} element={<Cart/>}/>
      <Route path={ROUTES.CATEGORY} element={<SingleCategory/>}/>
      <Route path="*" element={<NotFound/>}/>
      
    </Routes>
  );
};

export default AppRoutes;
