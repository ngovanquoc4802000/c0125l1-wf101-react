import { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./profileParent.css";

function ProfileParent() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/profile" || location.pathname === "/profile/") {
      navigate("/profile/info", { replace: true });
    }
  }, [location.pathname, navigate]);
  return (
    <div className="container page-section">
      <h1>Trang Profile của bạn</h1>
      <nav className="profile-tabs">
        <ul>
          <li>
            <NavLink
              to="info"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Thông tin
            </NavLink>
          </li>
          <li>
            <NavLink
              to="posts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Bài viết
            </NavLink>
          </li>
          <li>
            <NavLink
              to="settings"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cài đặt
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="profile-content">
        <Outlet /> {/* Nơi các tab con sẽ được hiển thị */}
      </div>
    </div>
  );
}

export default ProfileParent;
