import React from 'react';
import './searchBar.css';

function Searchbar() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className='search-bar'>
      <form
        className='search-form d-flex align-items-center'
        method='POST'
        action='#'
        onSubmit={handleSubmit}
      >
        <input 
          type='text'
          name='query'
          placeholder='Search'
          title='Enter search keywords'
          aria-label='Search'
        />
        <button type='submit' title='Search'>
          <i className='bi bi-search'></i>
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
