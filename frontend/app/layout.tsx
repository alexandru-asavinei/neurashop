import "./globals.css";

import MobileNav from "../components/MobileNav";

import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
import { SearchProvider } from "../context/SearchContext";
import { CategoryProvider } from "../context/CategoryContext";

export const metadata = {
  title: "NeuraShop",
  description: "AI-powered multi-vendor marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-black">
        <SearchProvider>
          <CategoryProvider>
            <WishlistProvider>
              <CartProvider>
                <div className="max-w-md mx-auto min-h-screen bg-background relative pb-20">
                  {children}
                  <MobileNav />
                </div>
              </CartProvider>
            </WishlistProvider>
          </CategoryProvider>
        </SearchProvider>
      </body>
    </html>
  );
}