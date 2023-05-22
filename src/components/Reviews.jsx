import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/API';

export default function Reviews() {
  const [loading, setLoading] = useState(true);
  const [movieReviews, setMovieReviews] = useState(null);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  const { results } = movieReviews || {};

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setMovieReviews(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <ul>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!results || (results.length === 0 && <p>No results available</p>)}
      {results &&
        results.map(item => (
          <li key={item.id}>
            <p>Author : {item.author ? item.author : 'Unknown author'}</p>
            <p>{item.content}</p>
          </li>
        ))}
    </ul>
  );
}
