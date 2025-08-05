import React from "react";
import Link from "next/link";
const HeroSection: React.FC = () => {
  return (
    <div className="@container mt-12">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
          style={{
            backgroundImage: ` url("/Ghandruk-Village.webp")`
          }}
        >
          <div>
            <div className="flex flex-col gap-2 text-center">
              <h1 className=" text-4xl font-black text-white text-shadow-black text-shadow-2xs text-sh leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                <span className="text-[#eb7f13]"> Rooted in Culture.</span><br /> Grown by Community.
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Discover authentic, ethical products and experiences inspired by
                Nepal.
              </h2>
            </div>
            <div className="flex-wrap gap-3 flex justify-center">
              <Link href="#shop">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#eb7f13] hover:bg-[#ad5700] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Shop Now</span>
              </button>
              </Link>
              <Link href="#experience">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5  bg-[#c9c9c9] hover:bg-[#a5a5a5] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Explore Experiences</span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
