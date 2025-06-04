import { NavLink, Outlet } from "react-router-dom";

function MainLayOut() {
  return (
    <div>
      <NavLink to="amazon">Amazon</NavLink>
      <NavLink to="shoppe">shope</NavLink>
      <Outlet />
    </div>
  );
}

export default MainLayOut;
