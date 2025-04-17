import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import instaImg1 from "../public/instagram-1.jpg";
import instaImg2 from "../public/instagram-2.jpg";
import instaImg3 from "../public/instagram-3.jpg";
import instaImg4 from "../public/instagram-4.jpg";
import instaImg5 from "../public/instagram-5.jpg";
import instaImg6 from "../public/instagram-6.jpg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#f5eff2]">
      <footer className="max-w-[1200px] mx-auto py-20 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h4 className="uppercase mb-6 text-lg font-bold text-[#0f172a]">
            Contact Info
          </h4>
          <p className="flex items-center gap-2 text-[#64748b] mb-4">
            <span className="text-[#ed3849] text-xl">
              <FaMapMarkerAlt />
            </span>
            123, London Bridge Steet, London
          </p>
          <p className="flex items-center gap-2 text-[#64748b] mb-4">
            <span className="text-[#ed3849] text-xl">
              <IoMdMailUnread />
            </span>
            Chogalesoham74@gmail.com
          </p>
          <p className="flex items-center gap-2 text-[#64748b]">
            <span className="text-[#ed3849] text-xl">
              <FaPhone />
            </span>
            +91 70202 24131
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="uppercase mb-6 text-lg font-bold text-[#0f172a]">
            Company
          </h4>
          <Link
            href="/"
            className="block mb-4 text-[#64748b] hover:text-[#ed3849]"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="block mb-4 text-[#64748b] hover:text-[#ed3849]"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="block mb-4 text-[#64748b] hover:text-[#ed3849]"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block mb-4 text-[#64748b] hover:text-[#ed3849]"
          >
            Contact Us
          </Link>

          <Link href="/" className="block text-[#64748b] hover:text-[#ed3849]">
            Terms & Conditions
          </Link>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="uppercase mb-6 text-lg font-bold text-[#0f172a]">
            Useful Links
          </h4>
          <Link
            href="/"
            className="block mb-4 text-[#64748b] hover:text-[#ed3849]"
          >
            Help
          </Link>
          <Link
            href="/"
            className="block mb-4 text-[#64748b] hover:text-[#ed3849]"
          >
            Track Your Order
          </Link>
          <Link
            href="/"
            className="block mb-4 text-[#64748b] hover:text-[#ed3849]"
          >
            Men
          </Link>
          <Link
            href="/"
            className="block mb-4 text-[#64748b] hover:text-[#ed3849]"
          >
            Women
          </Link>
          <Link href="/" className="block text-[#64748b] hover:text-[#ed3849]">
            Dresses
          </Link>
        </div>

        {/* Instagram Grid */}
        <div>
          <h4 className="uppercase mb-6 text-lg font-bold text-[#0f172a]">
            Instagram
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {[
              instaImg1,
              instaImg2,
              instaImg3,
              instaImg4,
              instaImg5,
              instaImg6,
            ].map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={`Instagram ${idx + 1}`}
                className="rounded-md"
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
