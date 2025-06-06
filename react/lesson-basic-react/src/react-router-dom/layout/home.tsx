import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Trang chủ</h2>
      <h3>Danh sách sản phẩm mẫu:</h3>
      <ul>
        <li>
          <Link to="/product/1">Xem chi tiết Sản phẩm A </Link>
        </li>
        <li>
          <Link to="/product/2">Xem chi tiết Sản phẩm B</Link>
        </li>
        <li>
          <Link to="/product/3">Xem chi tiết Sản phẩm C</Link>
        </li>
        <li>
          <Link to="/product/99">
            Xem chi tiết Sản phẩm không tồn tại
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
