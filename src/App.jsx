import { Route, Routes } from "react-router-dom";
import { routers } from "./Routes";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import { ContextProvider } from "./Context/Context";
import Header from "./Components/Header";

const App = () => {
  return (
    <ContextProvider>
      <div>
        <Header />
        <Routes>
          {routers?.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} >
              { item.children?.map((child, index) =>{
                <Route key={index} path={child.path} element={child.element} />
              })}
            </Route>
          ))}
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </ContextProvider>
  );
};

export default App;
