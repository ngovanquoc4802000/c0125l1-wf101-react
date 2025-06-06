import ProductCart from "../productCart/productCart";
import { products } from "../../data";

function Products() {
  return (
    <div className="page-section">
      <h1>Tất cả sản phẩm của chúng tôi</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
