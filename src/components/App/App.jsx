

import "../../assets/styles/global.scss";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/AppRoutes";

const App = () => {

  
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
