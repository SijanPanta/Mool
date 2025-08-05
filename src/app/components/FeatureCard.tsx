"use client";

import { useState } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <>
      <div
        className="h-40 cursor-pointer [perspective:1000px] z-0"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div className="absolute w-full h-full flex flex-col justify-center items-center bg-white border border-gray-300 rounded-lg shadow text-black [backface-visibility:hidden]">
            <div className="text-3xl text-[#eb7f13]">{icon}</div>
            <h1 className=" text-2xl font-bold">{title}</h1>
          </div>

          <div className="absolute w-full h-full flex justify-center items-center bg-[#ebebeb] border border-gray-300 rounded-lg shadow p-4 text-black text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
