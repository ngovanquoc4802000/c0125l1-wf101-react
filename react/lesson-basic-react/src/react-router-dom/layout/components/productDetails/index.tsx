import { useParams } from "react-router-dom";

interface productState {
  id: number;
  name: string;
  description: string;
}

const products: productState[] = [
  { id: 1, name: "Sản phẩm A", description: "Mô tả chi tiết sản phẩm A." },
  { id: 2, name: "Sản phẩm B", description: "Mô tả chi tiết sản phẩm B." },
  { id: 3, name: "Sản phẩm C", description: "Mô tả chi tiết sản phẩm C." },
  { id: 3, name: "Sản phẩm C", description: "Mô tả chi tiết sản phẩm C." },
];

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));
  if (!product) {
    return (
      <div>
        <h2>Không tìm thấy sản phẩm</h2>
        <p>Sản phẩm {productId} không tồn tại.</p>
      </div>
    );
  }
  return (
    <div>
      <h2 className="">Chi tiết sản phẩm: {product.name}</h2>
      <p>ID: {product?.id}</p>
      <p>{product?.description}</p>
    </div>
  );
}

export default ProductDetail;
