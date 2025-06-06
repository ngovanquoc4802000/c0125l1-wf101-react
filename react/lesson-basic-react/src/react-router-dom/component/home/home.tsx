import { Link } from "react-router-dom";
import { products } from "../../data";

function Home() {
  const featuredProducts = products.slice(0, 3);
  return (
    <div className="container page-section">
      <h1>Chào mừng bạn đến với Trang chủ!</h1>
      <p>Khám phá ứng dụng React Router đầy đủ tính năng của chúng tôi.</p>

      <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>
        Sản phẩm nổi bật
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                maxWidth: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
            <h3>{product.name}</h3>
            <p style={{ color: "var(--error-color)", fontWeight: "bold" }}>
              {product.price}
            </p>
            <Link to={`/products/${product.id}`}>
              <button>Xem chi tiết</button>
            </Link>
          </div>
        ))}
      </div>
      <p style={{ marginTop: "30px", textAlign: "center" }}>
        <Link to="/products">
          <button>Xem tất cả sản phẩm</button>
        </Link>
      </p>
    </div>
  );
}

export default Home;
