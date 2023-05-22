import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovieByQuery } from 'services/API';
import SearchMovies from 'components/SearchMovies';
import SearchForm from 'components/SearchForm';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const query = searchParams.get('query');

  const [searchQuery, setSearchQuery] = useState(query);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) handleSearch(searchQuery);
  }, []);

  function handleSearch(query) {
    searchMovieByQuery(query)
      .then(response => {
        setSearchResults(response.results);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <SearchForm
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchParams={setSearchParams}
      />
      <ul>
        <SearchMovies searchMovies={searchResults} />
      </ul>
    </div>
  );
}

export default Movies;
