import useTrendingMovies from 'components/FetchTrendingMovies/FetchTrendingMovies';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { Bars } from 'react-loader-spinner';
import { Wrapper, Subtitle, List } from './Home.styled';

const Home = () => {
  const { trendingMovies, loading } = useTrendingMovies();

  return (
    <Wrapper>
      <Subtitle>Trending today</Subtitle>
      {loading ? (
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <>
          <List>
            <TrendingMovies trendingMovies={trendingMovies} />
          </List>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
