export interface productTs {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}
interface userPostsTs {
  id: number;
  title: string;
  content: string;
}
export const products: productTs[] = [
  {
    id: 1,
    name: "Laptop Gaming XYZ",
    price: "25.000.000 VNĐ",
    description:
      "Laptop mạnh mẽ cho game thủ và đồ họa. CPU Intel Core i9, RAM 32GB, SSD 1TB NVMe, Card đồ họa NVIDIA GeForce RTX 4080. Màn hình 17 inch QHD 165Hz.",
    image: "https://via.placeholder.com/300x200?text=Laptop+Gaming",
  },
  {
    id: 2,
    name: "Điện thoại SmartFone 10",
    price: "15.000.000 VNĐ",
    description:
      "Trải nghiệm đỉnh cao với camera siêu nét và hiệu năng vượt trội. Màn hình OLED 120Hz, Chip A16 Bionic, Camera 108MP, Pin 5000mAh.",
    image: "https://via.placeholder.com/300x200?text=Smartphone",
  },
  {
    id: 3,
    name: "Tai nghe Bluetooth Pro",
    price: "2.500.000 VNĐ",
    description:
      "Chất lượng âm thanh tuyệt vời, pin bền bỉ. Chống ồn chủ động, thời lượng pin 40 giờ, sạc nhanh.",
    image: "https://via.placeholder.com/300x200?text=Headphones",
  },
  {
    id: 4,
    name: "Bàn phím cơ RGB",
    price: "1.800.000 VNĐ",
    description:
      "Gõ phím mượt mà, đèn LED RGB rực rỡ. Switch Cherry MX Red, layout TKL, keycaps PBT.",
    image: "https://via.placeholder.com/300x200?text=Keyboard",
  },
  {
    id: 5,
    name: "Chuột Gaming X10",
    price: "700.000 VNĐ",
    description:
      "Thiết kế ergonomic, độ chính xác cao. Cảm biến quang học 20000 DPI, 7 nút lập trình.",
    image: "https://via.placeholder.com/300x200?text=Gaming+Mouse",
  },
  {
    id: 6,
    name: 'Màn hình UltraWide 34"',
    price: "8.000.000 VNĐ",
    description:
      "Không gian làm việc rộng lớn, màu sắc sống động. Độ phân giải 3440x1440, IPS, 144Hz.",
    image: "https://via.placeholder.com/300x200?text=Ultrawide+Monitor",
  },
];

export const userPosts: userPostsTs[] = [
  {
    id: 1,
    title: "Bài viết về React Hooks",
    content: "Học cách sử dụng useState và useEffect hiệu quả.",
  },
  {
    id: 2,
    title: "Mẹo tối ưu hóa hiệu suất React",
    content: "Sử dụng React.memo và useCallback để cải thiện tốc độ.",
  },
  {
    id: 3,
    title: "Giới thiệu về React Router v6",
    content: "Khám phá các tính năng mới trong phiên bản React Router 6.",
  },
];
