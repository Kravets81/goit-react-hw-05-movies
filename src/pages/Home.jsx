import useTrendingMovies from 'components/FetchTrendingMovies';
import TrendingMovies from 'components/TrendingMovies';

const Home = () => {
  const { trendingMovies, loading } = useTrendingMovies();

  return (
    <div>
      <h2>Trending today</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <TrendingMovies trendingMovies={trendingMovies} />
        </ul>
      )}
    </div>
  );
};

export default Home;
