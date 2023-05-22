import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/API';

export default function Cast() {
  const [loading, setLoading] = useState(true);
  const [movieCredits, setMovieCredits] = useState(null);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  const BASE_URL = `https://image.tmdb.org/t/p/original`;
  const { cast } = movieCredits || {};

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setMovieCredits(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchMovieCredits(movieId);
  }, [movieId]);

  return (
    <ul>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!cast || (cast.length === 0 && <p>No cast available</p>)}
      {cast &&
        cast.map(item => (
          <li key={item.id}>
            <img
              src={BASE_URL + item.profile_path}
              alt={item.original_name}
              width={55}
              height={'auto'}
            />
            <p>Name: {item.original_name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
    </ul>
  );
}
