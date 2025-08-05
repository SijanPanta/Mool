"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/Header";
type Product = {
  title: string;
  description: string;
  price: number;
  images: string[];
};

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_URL}/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <>
    <Header/>
    <main className="w-full h-screen   text-[#161412] bg-white">
      {/* Breadcrumbs */}
      <div className="max-w-5xl  bg-gray-200 mx-auto px-6 py-8">
        <div className="text-sm mt-12 text-[#81766a] mb-2">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /
          <Link href="/#shop" className="hover:underline ml-1">
            Products
          </Link>{" "}
          /<span className="ml-1">{product.title}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>

        {/* Description */}
        <p className="text-base mb-4">{product.description}</p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* {product.images.map((src, i) => (
           
          ))} */}
        </div>

        {/* Add to Cart */}
        <div className="flex justify-end">
          <button className="bg-[#e5ccb2] text-[#161412] px-6 py-3 rounded-full font-bold hover:bg-[#d9bfa2]">
            Add to Cart - ${product.price}
          </button>
        </div>
      </div>
    </main>
    </>
  );
};

export default ProductPage;
