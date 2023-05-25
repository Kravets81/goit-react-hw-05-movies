import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/API';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import {
  Button,
  Wrapper,
  Image,
  Item,
  List,
  ButtonLink,
} from './MovieCard.styled';

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
          <Button to={backLincLocationRef.current}>Go back</Button>
          <Wrapper>
            <div>
              <Image src={`${posterURL}`} alt={original_title} />
            </div>
            <div>
              <h3>
                {original_title} ({releaseYear})
              </h3>
              <p>User score: {popularity}</p>
              <h4>Overview</h4>
              <p>{overview}</p>
              <h4>Genres</h4>
              <p>{genresMovie}</p>
            </div>
          </Wrapper>
          <h4>Additional informanion</h4>
          <List>
            <Item>
              <ButtonLink to="cast">Cast</ButtonLink>
            </Item>
            <Item>
              <ButtonLink to="reviews">Reviews</ButtonLink>
            </Item>
          </List>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
}

MovieCard.propTypes = {
  movieId: PropTypes.string,
  movieData: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    release_date: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
  }),
};
