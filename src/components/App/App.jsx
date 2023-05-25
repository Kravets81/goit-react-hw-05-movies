import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieCard = lazy(() => import('../../pages/MovieCard/MovieCard'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
