import React, { useState } from 'react';

export default function SearchForm({ onSearch, searchQuery, setSearchQuery }) {
  function handleSearchMovie(e) {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter the film title');
    }
    onSearch(searchQuery);

    // setSearchQuery('');
  }

  return (
    <form onSubmit={handleSearchMovie}>
      <input
        type="text"
        name="searchQuery"
        value={searchQuery}
        autoComplete="off"
        autoFocus
        placeholder="Search movies ..."
        onChange={e => {
          setSearchQuery(e.target.value.toLowerCase());
        }}
      />
      <button>Search</button>
    </form>
  );
}
