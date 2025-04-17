"use client";

import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const OrderConfirmation = () => {
  useEffect(() => {
    localStorage.removeItem("cart");
  }, []);

  return (
    <div className="flex h-[75vh] items-center justify-center">
      <div className="p-6 sm:p-10 rounded-lg shadow-xl  border border-orange-200 bg-white text-center w-full max-w-md">
        <div
          className={`flex items-center justify-center mx-auto mb-6 h-24 w-24 rounded-full 
            bg-orange-500 "
          `}
        >
          <span className={`text-white `}>
            <FaCheck className=" text-6xl font-bold animate-bounce" />
          </span>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Order Plase Sucsefully!
        </h1>

        <p className=" mb-6">
          We've sent a confirmation to your e-mail for verification.
        </p>

        <a href={"/"}>
          <button
            className={`w-full py-2 rounded-md text-white font-semibold shadow-md transition-transform transform hover:scale-105 
           bg-orange-500 hover:bg-orange-600
           
          }`}
          >
            Continue Shopping
          </button>
        </a>
      </div>
    </div>
  );
};

export default OrderConfirmation;
