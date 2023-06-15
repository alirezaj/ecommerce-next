import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex items-center gap-6 p-16">
      <div className="flex flex-col  w-1/2 ">
        <span className="text-[var(--large-font-size)] font-[var(--weight-600)] capitalize mb-4">
          hot promotions
        </span>
        <h1 className="text-[2.75rem] font-bold capitalize leading-snug">
          fashion trending{" "}
          <span className="block text-[var(--first-color)] text-[3.5rem]">
            greate collection
          </span>
        </h1>
        <p className="text-[var(--large-font-size)] my-8 mx-2">
          save more with coupons & up to 20% off{" "}
        </p>
        <button
          className="w-fit bg-[var(--first-color)] border border-[var(--first-color)] text-[var(--body-color)] transition-all duration-500 ease-[var(--transition)]
                      font-second font--[var(--small-font-size)] font-bold p-2 text-sm rounded-sm capitalize inline-block 
                      hover:bg-transparent hover:text-[var(--first-color)]"
        >
          shop now
        </button>
      </div>
      <div className="relative justify-end w-1/2 h-80">
        <Image src="/img/home-img.png" fill alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
