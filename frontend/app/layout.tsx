import "./globals.css";

import MobileNav from "../components/MobileNav";

import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
import { SearchProvider } from "../context/SearchContext";

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
          <WishlistProvider>
            <CartProvider>
              <div className="max-w-md mx-auto min-h-screen bg-background relative pb-20">
                {children}
                <MobileNav />
              </div>
            </CartProvider>
          </WishlistProvider>
        </SearchProvider>
      </body>
    </html>
  );
}