import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import MainLayout from "../component/mainLayout";
import Home from "../component/home/home";
import About from "../component/about/about";

function AppRoutes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" />
      </Route>
    </ReactRouterRoutes>
  );
}

export default AppRoutes;
