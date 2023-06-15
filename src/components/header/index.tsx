import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col w-full">
      {/* Start - Header Top Section - Top Header Container */}
      <div
        className="h-[var(--header-height)] bg-[var(--first-color-alt)] 
        border-b-[1px] border-[var(--first-color)] my-container"
      >
        <div
          className="flex justify-between items-center 
        ps-[0.875rem] pe-[0.875rem] w-full h-full text-[var(--small-font-size)]"
        >
          <div>
            {/* Cotact Section */}
            <div className="flex justify-between items-center gap-8">
              <span>(+01) 2345-6789</span>
              <span className="capitalize">our location</span>
            </div>
          </div>
          {/* Header Title Section */}
          <div>
            <p className="capitalize font-semibold text-[var(--text-color-light)]">
              super value Deals - save more money with coupons
            </p>
          </div>
          {/* Header Login Section */}
          <div>
            <span className="text-[var(--text-color)]">Login / Sign Up</span>
          </div>
        </div>
      </div>
      {/* End - Header Top Section - Top Header Container */}
      {/* Start - Header Bottom Section - Bottom Header Container */}
      <nav className="my-container">
        <div
          className="flex justify-between items-center 
          ps-[0.875rem] pe-[0.875rem] h-[var(--header-bottom-section-height)]"
        >
          <div className="relative w-36 h-8">
            <Image
              fill
              src="/img/logo.svg"
              alt=""
              style={{ objectFit: "fill" }}
            />
          </div>

          <div className="flex w-full justify-between items-center ml-10">
            {/* Navigation Links */}
            <ul className="flex justify-around gap-10 list-none mr-auto">
              <li className="text-[var(--title-color)] font-bold transition-all cursor-pointer hover:text-[var(--first-color)]">Home</li>
              <li className="text-[var(--title-color)] font-bold transition-all cursor-pointer hover:text-[var(--first-color)]">Shop</li>
              <li className="text-[var(--title-color)] font-bold transition-all cursor-pointer hover:text-[var(--first-color)]">My Account</li>
              <li className="text-[var(--title-color)] font-bold transition-all cursor-pointer hover:text-[var(--first-color)]">Compare</li>
              <li className="text-[var(--title-color)] font-bold transition-all cursor-pointer hover:text-[var(--first-color)]">Login</li>
            </ul>
            {/* Search Input */}
            <div className="flex justify-end items-center gap-5 w-[340px]">
              <div className="relative flex items-center w-full">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="search for items"
                  className="w-full h-[45px] outline-none border border-[var(--border-color-alt)] rounded-sm p-1 px-2 text-[var(--small-font-size)] placeholder:text-sm placeholder:capitalize"
                />
                <BiSearchAlt className="absolute top-1/2 -translate-y-1/2 right-1 w-7 h-7 text-slate-400 cursor-pointer" />
              </div>
              <button className="relative">
                <AiOutlineHeart className="w-6 h-6" />
                <div className="absolute flex justify-center items-center p-1 -top-5 left-2 w-6 h-6 bg-[var(--first-color)] ring-offset-1 ring-1 ring-[var(--first-color)] rounded-full">
                  <span className="text-white text-[10px]">12</span>
                </div>
              </button>
              <button className="relative">
                <AiOutlineShoppingCart className="w-6 h-6" />
                <div className="absolute flex justify-center items-center p-1 -top-5 left-2 w-6 h-6 bg-[var(--first-color)] ring-offset-1 ring-1 ring-[var(--first-color)] rounded-full">
                  <span className="text-white text-[10px]">12</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* End - Header Bottom Section - Bottom Header Container */}
    </header>
  );
};

export default Header;
