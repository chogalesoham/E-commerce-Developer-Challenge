"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/features/cart-slice";
import EmptyCart from "../../../public/empty-cart.avif";
import OrderSummary from "../../../Componets/order-summary";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const reduxProducts = useSelector((state) => state.cart.products);
  const [storedCart, setStoredCart] = useState([]);

  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];
    setStoredCart(cartFromStorage);
  }, [reduxProducts]);

  const handleQuantity = (type, id) => {
    dispatch(updateQuantity({ type, id }));
    const updatedCart = reduxProducts.map((item) => {
      if (item.id === id) {
        if (type === "INC") item.quantity += 1;
        else if (type === "DEC" && item.quantity > 1) item.quantity -= 1;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
    const updatedCart = reduxProducts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.error("Product removed from cart", {
      duration: 2000,
      position: "top-right",
    });
  };

  return (
    <section
      style={{ padding: "40px 16px" }}
      className="section__container flex flex-col lg:flex-row justify-center h-auto min-h-screen gap-6"
    >
      <div
        style={{ padding: "20px", marginBottom: "20px" }}
        className="w-full lg:w-[70%] bg-white shadow-lg rounded-lg"
      >
        <h2
          style={{ marginBottom: "16px" }}
          className="text-2xl font-semibold text-gray-800"
        >
          Your Shopping Cart
        </h2>
        {storedCart.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <img
              src={EmptyCart.src}
              style={{ width: "250px", height: "250px", marginBottom: "16px" }}
              className="object-contain"
            />
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          storedCart.map((item, index) => (
            <div
              key={index}
              style={{ marginBottom: "15px", padding: "10px" }}
              className="flex flex-col sm:flex-row justify-between items-center border rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div className=" flex md:flex-row flex-col items-center justify-start gap-2">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ marginRight: "16px" }}
                    className="w-20 h-20 object-cover rounded-full border-2 border-gray-300 line-clamp-1"
                  />
                </div>
                <div className="text-gray-700 w-auto flex md:flex-col  justify-between gap-2 ">
                  <h4 className="text-lg font-semibold line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>

              <div className=" flex  items-center justify-start gap-2">
                <div
                  style={{ margin: "10px 10px", padding: "8px 12px" }}
                  className=" w-full md:w-auto flex justify-center items-center border rounded-lg bg-gray-100 shadow-md"
                >
                  <button
                    onClick={() => handleQuantity("DEC", item.id)}
                    style={{ padding: "6px 12px" }}
                    className="bg-gray-300 rounded-l-lg hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span
                    style={{ padding: "0 12px" }}
                    className="text-lg font-semibold"
                  >
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantity("INC", item.id)}
                    style={{ padding: "6px 12px" }}
                    className="bg-gray-300 rounded-r-lg hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <div className="m-4  sm:mt-3 w-x md:w-auto">
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-600 w-full py-4 px-5 sm:py-3 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <OrderSummary />
    </section>
  );
};

export default Cart;
