import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import Home from '../../pages/Home';
import About from '../../pages/About';
import Contacts from '../../pages/Contacts';
import Cart from '../../pages/Cart';
import NotFound from '../../pages/NotFound';
import SingleCategory from "../../pages/SingleCategory";
import SingleProduct from "../../pages/SingleProduct";
import Wishlist from "../../pages/Wishlist";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={ROUTES.ABOUT} element={<About/>}/>
      <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
      <Route path={ROUTES.CONTACTS} element={<Contacts/>}/>
      <Route path={ROUTES.CART} element={<Cart/>}/>
      <Route path={ROUTES.CATEGORY} element={<SingleCategory/>}/>
      <Route path={ROUTES.WISHLIST} element={<Wishlist/>}/>
      <Route path="*" element={<Navigate to="/" replace />} />
      
    </Routes>
  );
};

export default AppRoutes;
