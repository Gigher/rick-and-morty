import Image from 'next/image'
import React from 'react'

import styles from '../../styles/modules/Locations.module.scss';
import locationsImg from '../../public/assets/locations-illustration.svg';
import SearchBar from '@/components/SearchBar';
import CustomFilter from '@/components/CustomFilter';
import { dimensions, locationTypes } from '@/constants';

const page = () => {
  return (
    <main className={styles.main}>
      <Image
        src={locationsImg}
        width={326}
        height={202}
        alt="Locations illustration"
      />

      <div className={styles.inputsWrapper}>
        <SearchBar />
        <CustomFilter title='Types' options={locationTypes} />
        <CustomFilter title='Dimension' options={dimensions} />
      </div>
    </main>
  )
}

export default page