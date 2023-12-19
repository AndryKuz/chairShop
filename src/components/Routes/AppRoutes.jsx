import { Routes, Route } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import Home from '../../pages/Home';
import Furniture from '../../pages/Furniture';
import About from '../../pages/About';
import Contacts from '../../pages/Contacts';
import Cart from '../../pages/Cart';
import NotFound from '../../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={ROUTES.ABOUT} element={<About/>}/>
      <Route path={ROUTES.FURNITURE} element={<Furniture/>}/>
      <Route path={ROUTES.CONTACTS} element={<Contacts/>}/>
      <Route path={ROUTES.CART} element={<Cart/>}/> */
      <Route path="*" element={<NotFound/>}/>
      
    </Routes>
  );
};

export default AppRoutes;
