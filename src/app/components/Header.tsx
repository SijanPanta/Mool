import React from "react";
import Link from "next/link"; // Use Link for internal navigation
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <header
      id="home"
      className="flex fixed w-full mb-4 items-center justify-between max-h-16 whitespace-nowrap border-b-2 bg-[#f3f3f3] border-black z-50 px-10 py-3"
    >
      <Link href="/">
        <div className="flex cursor-pointer items-center gap-4 text-[#181411]">
          <div className="">
            <Image
              src="/logo.png" 
              alt="Dhoop product"
              width={100} 
              height={500} 
              className="rounded-lg" 
            />
          </div>
         
        </div>
      </Link>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9 ">
          <Link
            href="/#shop"
            className="text-[#181411] text-sm font-medium hover:text-[#eb7f13] leading-normal"
          >
            Shop
          </Link>
          <Link
            href="#experience"
            className="text-[#181411] text-sm hover:text-[#eb7f13] font-medium leading-normal"
          >
            Experiences
          </Link>
          <Link
            href="#stories"
            className="text-[#181411] text-sm hover:text-[#eb7f13] font-medium leading-normal"
          >
            Stories
          </Link>
          <Link
            href="#impact"
            className="text-[#181411] text-sm hover:text-[#eb7f13] font-medium leading-normal"
          >
            Impact
          </Link>
        </div>
        <div className="flex items-center justify-evenly w-48 gap-2">
          <Link href="/signup" className="min-w-[84px] max-w-[480px]">
            <button
              className="flex w-full transform-gpu will-change-transform hover:scale-105 transition-transform duration-300 
                 items-center justify-center overflow-hidden rounded-xl h-10 px-4 
                 bg-[#eb7f13] hover:bg-[#ad5700] text-white text-sm font-bold tracking-[0.015em]"
            >
              <span className="truncate">Sign up</span>
            </button>
          </Link>

          <Link href="/login" className="min-w-[84px] max-w-[480px]">
            <button
              className="flex w-full transform-gpu will-change-transform hover:scale-110 transition-transform duration-300 
                 items-center justify-center overflow-hidden rounded-xl h-10 px-4 
                 bg-[#c9c9c9] hover:bg-[#a5a5a5] text-[#181411] text-sm font-bold tracking-[0.015em]"
            >
              <span className="truncate">Log in</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
