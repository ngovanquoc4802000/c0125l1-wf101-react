import { NavLink, Route, Routes } from "react-router-dom";
import Facebook from "./react-router-dom/facebook";
import Google from "./react-router-dom/google";
import Youtube from "./react-router-dom/youtube";
import MainLayOut from "./react-router-dom/mainLayout";
import Amazon from "./react-router-dom/mainLayout/amazon/amazon";
import Shoppe from "./react-router-dom/mainLayout/shoppe/shoppe";

function App1() {
  return (
    <div>
      <h1>Xin chào React</h1>

      <nav>
        <NavLink to="/google">
          | {""}
          Google
        </NavLink>

        <NavLink to="/facebook">
          | {""}
          Facebook
        </NavLink>
        <NavLink to="/youtube">
          | {""}
          Youtube
        </NavLink>
            <NavLink to="/main">
          | {""}
          Shoppe and Amazon
        </NavLink>
      </nav>
      <Routes>
        <Route index path="/google" element={<Google />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/main" element={<MainLayOut />}>
          <Route path="/main/amazon" element={<Amazon />}></Route>
          <Route path="/main/shoppe" element={<Shoppe />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App1;
