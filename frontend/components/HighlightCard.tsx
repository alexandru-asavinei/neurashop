type HighlightCardProps = {
  title: string;
  image: string;
};

export default function HighlightCard({ title, image }: HighlightCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md transform transition duration-200 hover:scale-[1.01] cursor-pointer">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">🔥 Trending Now</p>
      </div>
    </div>
  );
}