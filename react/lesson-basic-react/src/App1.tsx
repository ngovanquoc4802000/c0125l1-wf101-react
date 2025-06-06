import { Route, Routes } from "react-router-dom";
import About from "./react-router-dom/layout/about";
import Navbar from "./react-router-dom/layout/components/navbar";
import Contact from "./react-router-dom/layout/contact";
import Home from "./react-router-dom/layout/home";
import ProductDetail from "./react-router-dom/layout/components/productDetails";
import NotFound from "./react-router-dom/layout/components/notfound";

function App1() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
export default App1;
