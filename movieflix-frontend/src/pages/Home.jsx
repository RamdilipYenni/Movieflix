import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchMovies } from '../services/movieService';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(searchTerm, genreFilter);
      setMovies(data);
    };
    loadMovies();
  }, [searchTerm, genreFilter]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🎬 MovieFlix Dashboard</h1>

      {/* Search and Filter Inputs */}
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>

      {/* Movie Cards */}
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;