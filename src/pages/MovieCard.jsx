import React, { useEffect, useState, useRef } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/API';

export default function MovieCard() {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLincLocationRef = useRef(location.state?.from ?? '/');

  const BASE_URL = `https://image.tmdb.org/t/p/original`;
  const {
    genres,
    release_date,
    overview,
    popularity,
    poster_path,
    original_title,
  } = movieData || {};

  const posterURL = poster_path ? `${BASE_URL}${poster_path}` : '';
  const releaseYear = new Date(`${release_date}`).getFullYear();
  const genresMovie = genres ? genres.map(genre => [genre.name]).join(' ') : '';

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieData(data);
        setLoading(false);
      } catch (error) {
        setError('Ooops. Something went wrong...');
        setLoading(false);
      }
    };
    fetchMovieById(movieId);
  }, [movieId]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movieData && (
        <div>
          <NavLink to={backLincLocationRef.current}>Go back</NavLink>
          <img
            src={`${posterURL}`}
            alt={original_title}
            width={250}
            height={'auto'}
          />
          <h3>
            {original_title} ({releaseYear})
          </h3>
          <p>User score: {popularity}</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresMovie}</p>
          <h4>Additional informanion</h4>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
}
