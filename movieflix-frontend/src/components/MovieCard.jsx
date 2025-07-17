import React from 'react';

const MovieCard = ({ movie }) => {
  if (!movie) return null;

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre.join(', ')}</p>
      <p>Rating: ⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;