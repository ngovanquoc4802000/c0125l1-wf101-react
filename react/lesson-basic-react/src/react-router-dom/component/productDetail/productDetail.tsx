import { Link, useParams } from "react-router-dom";
import { products } from "../../data";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  return (
    <div className="page-section">
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 350px" }}>
          <img
            src={product?.image}
            alt={product?.name}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          />
        </div>
        <div style={{ flex: "2 1 450px" }}>
          <h1 style={{ color: "var(--primary-color)" }}>{product?.name}</h1>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "var(--error-color)",
              marginBottom: "20px",
            }}
          >
            {product?.price}
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            {product?.description}
          </p>
          <p style={{ marginTop: "20px", color: "var(--secondary-color)" }}>
            ID sản phẩm: {product?.id}
          </p>
          <Link
            to="/products"
            style={{ marginTop: "30px", display: "inline-block" }}
          >
            <button>Quay lại danh sách</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
