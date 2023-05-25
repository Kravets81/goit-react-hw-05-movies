import React from 'react';
import { useLocation } from 'react-router-dom';
import { Item, Link } from './SearchMovies.styled';

export default function SearchMovies({ searchMovies }) {
  const location = useLocation();

  return Array.isArray(searchMovies) && searchMovies.length > 0 ? (
    searchMovies.map(searchMovie => (
      <Item key={searchMovie.id}>
        <Link to={`/movies/${searchMovie.id}`} state={{ from: location }}>
          {searchMovie.title || searchMovie.name}
        </Link>
      </Item>
    ))
  ) : (
    <li>No results available</li>
  );
}
