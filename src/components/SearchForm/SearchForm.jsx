import React from 'react';
import { Form, Input, Button } from './SearchForm.styled';

export default function SearchForm({
  onSearch,
  searchQuery,
  setSearchQuery,
  setSearchParams,
}) {
  function handleSearchMovie(e) {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter the film title');
    }
    onSearch(searchQuery);
    setSearchParams({ query: searchQuery.trim() });
  }

  return (
    <Form onSubmit={handleSearchMovie}>
      <Input
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
      <Button>Search</Button>
    </Form>
  );
}
