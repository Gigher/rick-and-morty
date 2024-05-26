"use client";

import { useState } from 'react';

import styles from '../styles/modules/SearchBar.module.scss';
import SearchName from './SearchName';
import { SearchBarProps } from '@/types';

const SearchBar = ({ placeholder }: SearchBarProps) => {
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