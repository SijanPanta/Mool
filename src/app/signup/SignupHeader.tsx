import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header
      id="home"
      className="flex fixed w-full mb-8 items-center justify-between max-h-16 whitespace-nowrap border-b-2 bg-[#f3f3f3] border-black px-10 py-3"
    >
      <Link href="/">
        <div className="flex cursor-pointer items-center gap-4 text-[#181411]">
          <h2 className="text-[#181411] text-lg font-bold leading-tight tracking-[-0.015em]">
            <Image
              src="/logo.png"
              alt="Dhoop product"
              width={100}
              height={500}
              className="rounded-lg"
            />
          </h2>
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
            href="/#experience"
            className="text-[#181411] text-sm hover:text-[#eb7f13] font-medium leading-normal"
          >
            Experiences
          </Link>
          <Link
            href="/#stories"
            className="text-[#181411] text-sm hover:text-[#eb7f13] font-medium leading-normal"
          >
            Stories
          </Link>
          <Link
            href="/#impact"
            className="text-[#181411] text-sm hover:text-[#eb7f13] font-medium leading-normal"
          >
            Impact
          </Link>
        </div>

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
    </header>
  );
};
export default Header;
