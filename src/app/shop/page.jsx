"use client";

import { useEffect, useState } from "react";
import Cart from "../../../Componets/cart";

const page = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [allProducts, setAllProducts] = useState([]);

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 8);
  };

  const getAllProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setAllProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section className="section__container">
      <section
        style={{ marginTop: "10px", padding: "2rem 1rem" }}
        className="section__container bg-[#f4e5ec] rounded-lg my-6"
      >
        <h2
          style={{ marginBottom: "1.5rem" }}
          className="section__header capitalize text-3xl font-bold text-center"
        >
          Shop
        </h2>
        <p
          style={{ marginBottom: "1.5rem" }}
          className="section__subheader text-center text-gray-700"
        >
          We provide exceptional products to enhance your lifestyle with quality
          and elegance.
        </p>
      </section>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10  container mx-auto mb-16 px-10 sm:px-5 xl:px-14">
        {allProducts.length
          ? allProducts
              .slice(0, visibleProducts)
              .map((cart) => <Cart key={cart.id} cart={cart} />)
          : Array.from({ length: visibleProducts }).map((_, index) => (
              <div className=" flex flex-col gap-2">
                <div
                  key={index}
                  className=" h-72 rounded-xl bg-slate-300 shadow-md animate-pulse"
                ></div>
                <div className=" h-12 rounded-xl bg-slate-300 animate-pulse shadow-md"></div>
              </div>
            ))}
      </div>

      {/* Load More Button */}
      {visibleProducts < allProducts.length && (
        <div className="text-center my-10">
          <button
            onClick={loadMoreProducts}
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default page;
