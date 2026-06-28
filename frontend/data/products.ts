export type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "minimal-watch",
    title: "Minimal Watch",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
  },
  {
    id: "modern-backpack",
    title: "Modern Backpack",
    price: "$129",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
  },
  {
    id: "wireless-headphones",
    title: "Wireless Headphones",
    price: "$249",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  {
    id: "smart-lamp",
    title: "Smart Lamp",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800",
  },
];