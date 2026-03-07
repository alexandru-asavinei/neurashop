import "./globals.css";
import MobileNav from "../components/MobileNav";

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
      <body className="bg-[#FAFAFB] text-black">
        <div className="max-w-md mx-auto min-h-screen bg-[#FAFAFB] relative pb-20">
          {children}
          <MobileNav />
        </div>
      </body>
    </html>
  );
}