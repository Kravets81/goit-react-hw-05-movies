import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SearchMovies({ searchMovies }) {
  const location = useLocation();

  return Array.isArray(searchMovies) && searchMovies.length > 0 ? (
    searchMovies.map(searchMovie => (
      <li key={searchMovie.id}>
        <Link to={`/movies/${searchMovie.id}`} state={{ from: location }}>
          {searchMovie.title || searchMovie.name}
        </Link>
      </li>
    ))
  ) : (
    <li>No results available</li>
  );
}
