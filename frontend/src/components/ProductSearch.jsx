import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Product from "../pages/Products/Product";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/products/search/${searchTerm}`);
      setSearchResult(response.data);
      setError(null);
    } catch (error) {
      setSearchResult(null);
      setError(error.response.data.error || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center flex-col">
      <div className="flex m-2">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-l focus:outline-none w-[28rem]"
          />
          <button
            type="submit"
            className="bg-black hover:bg-gradient-to-r from-gray-500 to-gray-700 focus:ring-4 focus:ring-black text-white py-3 px-4 rounded-r"
          >
            <FaSearch />
          </button>
        </form>
      </div>

      {error && (
        <p className="text-red-600 font-semibold animate-pulse">{error}</p>
      )}
      {searchResult && (
        <div className="flex mt-2">
          <Product product={searchResult} />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
