import React, { useState } from 'react';
import { searchMovieByQuery } from 'services/API';
import SearchMovies from 'components/SearchMovies';
import SearchForm from 'components/SearchForm';

function Movies() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  console.log('123456', searchQuery);
  function handleSearch(query) {
    searchMovieByQuery(query)
      .then(response => {
        setSearchResults(response.results);
      })
      .catch(error => {
        console.error(error);
      });
  }
  console.log('123', searchResults);

  return (
    <div>
      <SearchForm
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ul>
        <SearchMovies searchMovies={searchResults} />
      </ul>
    </div>
  );
}

export default Movies;
