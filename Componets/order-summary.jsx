import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  initializeCart,
} from "../src/app/redux/features/cart-slice";
import Link from "next/link";

const OrderSummary = () => {
  const { selectedItems, totalPrice, tax, taxRate, grandTotal } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  // Dispatch initializeCart action when the component mounts
  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

  return (
    <div className="w-full lg:w-[30%] h-auto lg:h-[80%] bg-[#f4e5ec] rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>

      <div className="space-y-2 text-lg text-gray-600">
        <div className="flex justify-between">
          <p>Total Items:</p>
          <p className="font-semibold text-gray-800">{selectedItems}</p>
        </div>
        <div className="flex justify-between">
          <p>Total Price:</p>
          <p className="font-semibold text-gray-800">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Tax ({(taxRate * 100).toFixed(2)}%):</p>
          <p className="font-semibold text-gray-800">${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between border-t pt-2 font-bold text-gray-900 mt-3">
          <p>Grand Total:</p>
          <p>${grandTotal.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <button
          onClick={() => dispatch(clearCart())}
          className={`bg-red-600 text-white rounded-lg py-2 hover:bg-red-700 transition  ${
            selectedItems === 0 ? " cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Clear Cart
        </button>
        <Link
          href={selectedItems === 0 ? "/cart" : "/confirmation"}
          className={`bg-blue-700 text-white rounded-lg py-2 hover:bg-blue-800 transition flex justify-center items-center ${
            selectedItems === 0 ? " cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
