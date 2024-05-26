"use client";

import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react';

import { characters } from '@/constants'; 
import { SearchNameProps } from '@/types';
import searchImg from '../public/assets/icons/search.svg'
import styles from '../styles/modules/SearchName.module.scss';

const SearchName = ({ name, setName, placeholder }: SearchNameProps) => {
    const [query, setQuery] = useState('');

    const filteredCharacters = 
        query === "" 
            ? characters 
            : characters.filter((item) => (
                item.toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.toLowerCase().replace(/\s+/g, ""))
            ))

  return (
    <div>
        <Combobox>
            <div className={styles.combobox}>
                <ComboboxButton className={styles.comboboxButton}>
                    <Image
                        src={searchImg}
                        width={24}
                        height={24}
                        alt="Search loupe"
                    />
                </ComboboxButton>

                <ComboboxInput 
                    className={styles.comboboxInput} 
                    placeholder={placeholder}
                    displayValue={(name: string) => name}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery('')}
                >
                    <ComboboxOptions className={styles.comboboxOptions}>
                        {filteredCharacters.map((item) => (
                            <ComboboxOption key={item} className={({ active }) => `${active ? styles.active : styles.nonactive} ${styles.comboboxOption}`} value={item}>
                                {item}
                            </ComboboxOption>
                        ))
                        }
                    </ComboboxOptions>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchName