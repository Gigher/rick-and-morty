"use client";

import { useState } from 'react';

import styles from '../styles/modules/SearchBar.module.scss';
import SearchName from './SearchName';

const SearchBar = ({ placeholder }) => {
  const [name, setName] = useState('');

  const handleSearch = () => {
    
  }

  return (
    <form onSubmit={handleSearch}>
      <div>
        <SearchName
          name={name}
          setName={setName}
          placeholder={placeholder}
        />
      </div>
    </form>
  )
}

export default SearchBar