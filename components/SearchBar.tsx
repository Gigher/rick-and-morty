"use client";

import { useState } from 'react';

import styles from '../styles/modules/SearchBar.module.scss';
import SearchName from './SearchName';

const SearchBar = () => {
  const [name, setName] = useState('');

  const handleSearch = () => {
    
  }

  return (
    <form className='' onSubmit={handleSearch}>
      <div>
        <SearchName
          name={name}
          setName={setName}
        />
      </div>
    </form>
  )
}

export default SearchBar