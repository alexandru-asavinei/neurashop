export default function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex justify-around py-3">
      <button className="text-sm font-medium text-gray-900">Home</button>
      <button className="text-sm text-gray-600">Search</button>
      <button className="text-sm text-gray-600">Cart</button>
      <button className="text-sm text-gray-600">Wishlist</button>
      <button className="text-sm text-gray-600">Profile</button>
    </div>
  );
}