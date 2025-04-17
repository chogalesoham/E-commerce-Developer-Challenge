"use client";

import { useEffect, useState } from "react";
import Cart from "../../../Componets/cart";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  const getAllProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setAllProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = allProducts.filter(
      (item) =>
        item?.title.toLowerCase().includes(query) ||
        item?.description.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <section
        style={{ marginTop: "10px", padding: "2rem 1rem" }}
        className="  bg-[#f4e5ec] rounded-lg my-6"
      >
        <h2 className="section__header capitalize text-3xl font-bold text-center mb-6">
          Shop
        </h2>
        <p className="section__subheader text-center text-gray-700 mb-6">
          We provide exceptional products to enhance your lifestyle with quality
          and elegance.
        </p>
      </section>

      <section className=" container mx-auto">
        <div className="w-full mb-10 flex items-center justify-center pl-4 pr-4">
          <input
            className="search-bar w-full max-w-4xl py-2 px-3 border border-gray-400 rounded-l-md "
            value={searchQuery}
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search For Products..."
          />
          <button
            onClick={handleSearch}
            className="py-[8.5px] px-4 md:w-auto bg-red-600 text-white rounded-r-md  w-20 cursor-pointer hover:bg-red-700 border border-gray-400"
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10  container mx-auto mb-16 px-10 sm:px-5 xl:px-14 ">
          {!loading ? (
            filteredProducts.length > 0 ? (
              filteredProducts.map((prod) => <Cart key={prod.id} cart={prod} />)
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No products found.
              </p>
            )
          ) : (
            Array.from({ length: 8 }).map((_, index) => (
              <div className=" flex flex-col gap-2">
                <div
                  key={index}
                  className=" h-72 rounded-xl bg-slate-300 shadow-md animate-pulse"
                ></div>
                <div className=" h-12 rounded-xl bg-slate-300 animate-pulse shadow-md"></div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Search;
