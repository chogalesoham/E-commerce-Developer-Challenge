"use client";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/features/cart-slice";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const Cart = ({ cart }) => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { user } = useAuth();

  const handleAddToCart = () => {
    if (user) {
      dispatch(addToCart(cart));
      toast.success("Product added to cart", {
        duration: 2000,
        position: "top-right",
      });
    } else {
      toast.error("Please login to add items to cart", {
        duration: 2000,
        position: "top-right",
      });
      return;
    }
  };

  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between h-full">
      <div className="w-full h-48 relative mb-4">
        <Image
          src={cart?.image}
          alt={cart?.title}
          fill
          className="object-contain rounded-md shadow p-2"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-bold line-clamp-1">{cart?.title}</h3>
        <p className="text-gray-700 line-clamp-2">{cart?.description}</p>
        <div className="flex items-center justify-between gap-3">
          <p className="text-gray-700 font-bold text-lg">${cart?.price}</p>
          <button
            onClick={handleAddToCart}
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-md transition duration-200 text-nowrap"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
