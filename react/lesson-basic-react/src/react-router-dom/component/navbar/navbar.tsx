import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return ( 
         <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">My App</Link>
        </div>
        <ul className="navbar-menu">
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
             Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className={({ isActive }) => (isActive ? 'active' : '')}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
     );
}

export default Navbar;