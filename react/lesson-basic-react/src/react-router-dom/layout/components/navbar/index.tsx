import { NavLink } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">Trang chủ</NavLink>
        </li>
        <li>
          <NavLink to="/about">Về chúng tôi</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Liên hệ</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
