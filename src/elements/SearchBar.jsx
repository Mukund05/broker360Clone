import React, { useState } from 'react';

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement the search logic here
    console.log('Searching for:', searchKeyword);
  };

  return (
    <div className="flex justify-center items-center bg-white p-4 shadow-md">
      <div className="flex items-center w-full max-w-4xl">
        <input
          type="text"
          placeholder="Enter Keyword..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="flex-grow border border-gray-300 rounded-l-md p-2"
        />
        <div className="flex items-center border border-gray-300 border-l-0 rounded-r-md">
          <button className="px-4 py-2 border-l border-gray-300">Status</button>
          <button className="px-4 py-2 border-l border-gray-300">Beds</button>
          <button className="px-4 py-2 border-l border-gray-300">Baths</button>
          <button className="px-4 py-2 border-l border-gray-300">Price</button>
          <button className="px-4 py-2 border-l border-gray-300">Advanced</button>
          <button 
            onClick={handleSearch} 
            className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
