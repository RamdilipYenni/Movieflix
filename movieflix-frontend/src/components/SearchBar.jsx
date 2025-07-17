import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full border p-2 rounded"
    />
  );
};

export default SearchBar;