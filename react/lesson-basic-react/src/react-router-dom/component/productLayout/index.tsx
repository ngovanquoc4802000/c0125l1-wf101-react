import { NavLink, Outlet } from "react-router-dom";
import "./styles.css";

function ProductLayout() {
  return (
    <div className="container product-layout">
      <aside className="product-sidebar">
        <h2>Danh mục</h2>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/products"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Tất cả sản phẩm
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/categories"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Danh mục khác
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products/promo"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Khuyến mãi
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="product-main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default ProductLayout;
