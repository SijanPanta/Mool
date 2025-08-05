import React from "react";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price }) => {
  return (
    <main className="max-w-sm bg-white rounded-lg cursor-pointer shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-3">
      <div className="overflow-hidden aspect-square">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 60%), url("${imageUrl}")`,
          }}
        />
      </div>
      <div className="p-4">
        <p className="text-gray-800 text-lg font-semibold leading-snug line-clamp-2 mb-2">
          {title}
        </p>
        <p className="text-gray-600 font-medium">Rs. {price}</p>
      </div>
    </main>
  );
};

export default ProductCard;
