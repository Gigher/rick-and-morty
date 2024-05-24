"use client";

import { Fragment, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';

import styles from '../styles/modules/CustomFilter.module.scss';
import chevronImg from '../public/assets/icons/arrow-drop-down.svg';

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(title);

  const handleUpdateParams = () => {
    const newPathname = ''

    router.push(newPathname);
  }

  return (
    <div>
      <Listbox
        value={selected}
        onChange={(e) => setSelected(e)}
      >
        <div className={styles.listboxWrapper}>
          <ListboxButton className={styles.listboxBtn}>
            <span className={styles.title}>{selected}</span>
            <Image
              src={chevronImg}
              width={24}
              height={24}
              alt="chevron"
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ListboxOptions className={styles.listboxOptions}>
              {options.map((option) => (
                <ListboxOption
                  key={option}
                  value={option}
                  className={({ active }) => `${active ? styles.active : styles.nonactive} ${styles.listboxOption}`}
                >
                  {({ selected }) => (
                    <span className={`${selected ? styles.selected : ''}`}>
                      {option}
                    </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter;