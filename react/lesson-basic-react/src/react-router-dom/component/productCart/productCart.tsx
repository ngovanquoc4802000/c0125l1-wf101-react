import { Link } from "react-router-dom";
import "./productCart.css";
import type { productTs } from "../../data";
interface ProductCart {
  product: productTs[];
}

function ProductCart({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-info">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-price">{product.price}</p>
        <Link to={`/products/${product.id}`} className="product-card-button">
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
}

export default ProductCart;
