import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function TrendingMovies({ trendingMovies }) {
  const location = useLocation();
  console.log('локация списка', location);

  return trendingMovies.map(trendingMovie => (
    <li key={trendingMovie.id}>
      <Link to={`/movies/${trendingMovie.id}`} state={{ from: location }}>
        {trendingMovie.title || trendingMovie.name}
      </Link>
    </li>
  ));
}
