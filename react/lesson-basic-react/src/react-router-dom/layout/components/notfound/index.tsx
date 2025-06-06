import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Không tìm thấy trang</h1>
      <p>Xin lỗi, trang bạn đang tìm kiếm không tồn tại.</p>
      <p>
        Bạn có thể quay lại <Link to="/">Trang chủ</Link>.
      </p>
    </div>
  );
}

export default NotFound;
