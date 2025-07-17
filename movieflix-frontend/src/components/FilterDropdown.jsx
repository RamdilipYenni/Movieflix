import React from 'react';

const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Horror'];

const FilterDropdown = ({ onFilter }) => {
  return (
    <select onChange={(e) => onFilter(e.target.value)} className="border p-2 rounded">
      <option value="">All Genres</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>{genre}</option>
      ))}
    </select>
  );
};

export default FilterDropdown;