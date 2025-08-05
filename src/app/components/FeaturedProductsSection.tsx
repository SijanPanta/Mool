"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const FeaturedProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<null | {
    imageUrl: string;
    title: string;
    price: number;
    description: string;
  }>(null);

  const products = [
    {
      id: 2,
      imageUrl: "/dhoop.jpg",
      title: "Dhoop Single (7-pieces)",
      price: 350,
      description:
        "A set of 7 traditional Nepali dhoop sticks, perfect for daily rituals and meditation.",
    },
    {
      id: 3,
      imageUrl: "/dhoop_box.jpg",
      title: "Dhoop Box Combo with Holder",
      price: 900,
      description:
        "Complete dhoop set including premium incense and a handcrafted wooden holder.",
    },
    {
      id: 4,
      imageUrl: "/gundri.jpg",
      title: "Traditional Nepali Gundri",
      price: 100,
      description:
        "Handwoven mat made from natural fibers, commonly used for sitting or sleeping.",
    },
    {
      id: 5,
      imageUrl: "/tapari.jpg",
      title: "Nepali Local Tapari",
      price: 10,
      description:
        "Eco-friendly disposable leaf plates used in traditional Nepali gatherings and feasts.",
    },
    {
      id: 6,
      imageUrl: "/muda.jpg",
      title: "Traditional Nepali Muda",
      price: 200,
      description:
        "Handmade bamboo stool, strong and lightweight, ideal for kitchens and gatherings.",
    },
  ];

  return (
    <>
      <h2
        id="shop"
        className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
      >
        Featured Products
      </h2>
      <div className="grid bg-gray-100 grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="cursor-pointer"
          >
            <ProductCard
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default FeaturedProductsSection;
