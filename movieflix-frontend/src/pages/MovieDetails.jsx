import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Movie Details</h1>
      <p>Movie ID: {id}</p>
      {/* Later: Fetch and display full movie info using the ID */}
    </div>
  );
};

export default MovieDetails;