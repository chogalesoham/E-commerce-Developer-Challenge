"use client";

import Image from "next/image";
import Logo from "../public/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import UserLogin from "./user-login";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const products = useSelector((state) => state.cart.products);
  const [isMounted, setIsMounted] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="max-w-[1920px] mx-auto flex items-center justify-between px-6 py-3 bg-white shadow-sm">
      <Link href="/">
        <Image
          className="h-14 w-36 lg:w-52 lg:h-14 xl:h-16 object-cover"
          alt="Logo"
          src={Logo}
          priority
        />
      </Link>

      <nav className="hidden md:flex items-center gap-6 text-sm lg:text-base font-medium">
        <Link
          href="/"
          className="hover:text-blue-600 transition-colors text-xl font-semibold"
        >
          Home
        </Link>
        <Link
          href="/shop"
          className="hover:text-blue-600 transition-colors text-xl font-semibold"
        >
          Shop
        </Link>
        <Link
          href="/about"
          className="hover:text-blue-600 transition-colors text-xl font-semibold"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-blue-600 transition-colors text-xl font-semibold"
        >
          Contact
        </Link>
      </nav>

      {/* Auth/Login Section */}
      <div className="flex items-center gap-8 relative">
        <Link href="/search">
          <IoSearch className="text-3xl hover:text-[#ed3849]" />
        </Link>
        {user && (
          <Link href="/cart" className="hover:text-[#ed3849] relative">
            <HiOutlineShoppingBag className="text-3xl" />
            {isMounted && products.length > 0 && (
              <sup className="ml-3 text-sm absolute h-6 w-6 text-white rounded-full bg-[#ed3849] text-center flex items-center justify-center top-[-10px] right-[-10px]">
                {products.length}
              </sup>
            )}
          </Link>
        )}

        <UserLogin />
      </div>
    </header>
  );
};

export default Header;
