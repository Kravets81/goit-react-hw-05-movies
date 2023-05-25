import { useEffect, useState } from 'react';
import { getTrandingMovies } from 'services/API';

function useTrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrandingMovies();
        setTrendingMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return { trendingMovies, loading };
}

export default useTrendingMovies;
