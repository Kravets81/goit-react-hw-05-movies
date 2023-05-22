const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'bfdc0ae9bb4cf69882d567f8453b8335';

export async function getTrandingMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Ошибка при выполнении запроса!');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function searchMovieByQuery(searchQuery) {
  try {
    const response = await fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );
    if (!response.ok) {
      throw new Error('Ошибка при выполнении запроса!');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Ошибка при выполнении запроса!');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getMovieCredits(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Ошибка при выполнении запроса!');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getMovieReviews(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Ошибка при выполнении запроса!');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
