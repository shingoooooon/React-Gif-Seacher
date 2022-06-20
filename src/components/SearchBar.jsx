import React from 'react';

const SearchBar = (props) => {
  const { fetchGiphyAPI } = props;
  const handleChange = (event) => {
    fetchGiphyAPI(event.currentTarget.value);
  };

  return (
    <input onChange={handleChange} type="text"  className="form-search form-control" />
  );
};

export default SearchBar;
