import React from 'react';
import { useLocation } from 'react-router-dom';
import { Item, Link } from './TrendingMovies.styled';

export default function TrendingMovies({ trendingMovies }) {
  const location = useLocation();

  return trendingMovies.map(trendingMovie => (
    <Item key={trendingMovie.id}>
      <Link to={`/movies/${trendingMovie.id}`} state={{ from: location }}>
        {trendingMovie.title || trendingMovie.name}
      </Link>
    </Item>
  ));
}
