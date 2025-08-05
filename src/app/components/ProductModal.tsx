import React from "react";
import Image from "next/image";

type Product = {
  imageUrl: string;
  title: string;
  price: number;
  description: string;
};

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center b bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black h-[40%] rounded-lg shadow-lg w-[90%] max-w-md sticky p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
        >
          &times;
        </button>
        <div className="relative w-full h-[70%] mb-4 rounded overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-gray-700 mt-2">Price: Rs. {product.price}</p>
        <p className="text-gray-700 mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
