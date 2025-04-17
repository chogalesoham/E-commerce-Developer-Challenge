import Image from "next/image";
import Link from "next/link";
import bannerImg from "../public/header.png";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-100 to-pink-200 py-12 sm:py-16 px-3 sm:px-6 lg:px-10 rounded-b-3xl  shadow-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
        {/* Text Content */}
        <div className="z-10 space-y-6 text-center md:text-left">
          <h4 className="text-primary uppercase tracking-widest text-sm sm:text-base font-semibold">
            Up to <span className="text-red-500">20% Off</span>
          </h4>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 leading-tight drop-shadow-md tracking-tight">
            <span className="text-pink-500">Girl's</span> Fashion
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Discover the{" "}
            <span className="font-medium text-slate-800">latest trends</span> in
            girls' fashion. Shop curated outfits for every season and occasion.
          </p>

          <Link
            href="/shop"
            className="inline-block px-10 py-3 bg-black text-white text-base font-semibold rounded-full transition duration-300 hover:scale-105 hover:bg-slate-900 shadow-md"
          >
            EXPLORE NEW
          </Link>
        </div>

        {/* Image */}
        <div className="relative w-full h-[280px] sm:h-[360px] md:h-[500px] flex justify-center items-end">
          <Image
            src={bannerImg}
            alt="banner"
            className="drop-shadow-2xl object-contain"
            fill
            style={{ objectFit: "contain" }}
            priority
            placeholder="blur"
          />
        </div>
      </div>

      {/* Optional Design Blur Circle */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl z-0" />
    </div>
  );
};

export default Banner;
