import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container page-section"
      style={{
        textAlign: "center",
        minHeight: "calc(100vh - 250px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "var(--error-color)" }}>404</h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Trang không tìm thấy
      </h2>
      <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
      </p>
      <img
        src="https://via.placeholder.com/500x300?text=404+Page+Not+Found"
        alt="404 Not Found"
        style={{
          maxWidth: "80%",
          height: "auto",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      />
      <p>
        <Link
          to="/"
          style={{
            color: "var(--primary-color)",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Quay lại Trang chủ
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
