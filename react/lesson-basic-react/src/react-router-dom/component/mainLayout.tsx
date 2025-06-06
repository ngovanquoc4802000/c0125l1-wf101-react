import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Footer from "./footer";

function MainLayout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
