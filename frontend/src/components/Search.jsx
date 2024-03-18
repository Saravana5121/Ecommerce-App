import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-l focus:outline-none w-[28rem]"
      />
      <button
        onClick={handleClick}
        className= "bg-black hover:bg-gradient-to-r from-gray-500 to-gray-700 focus:ring-4 focus:ring-black text-white py-3 px-4 rounded-r"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;

