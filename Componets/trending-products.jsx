"use client";
import { useEffect, useState } from "react";
import Cart from "./cart";
// import { useAuth } from "../context/AuthContext";

const TrendingProducts = () => {
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
      <div className="py-8 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 capitalize">
          Trending Products
        </h2>
        <p className="text-gray-700 mb-6">
          We provide exceptional products to enhance your lifestyle with quality
          and elegance.
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10  container mx-auto mb-16 px-10 sm:px-5 xl:px-14">
        {allProducts.length
          ? allProducts
              .slice(0, visibleProducts)
              .map((cart) => <Cart key={cart.id} cart={cart} />)
          : Array.from({ length: visibleProducts }).map((_, index) => (
              <div key={index} className=" flex flex-col gap-2">
                <div className=" h-72 rounded-xl bg-slate-300 shadow-md animate-pulse"></div>
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

export default TrendingProducts;
