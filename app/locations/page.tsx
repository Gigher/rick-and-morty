import Image from 'next/image'
import React from 'react'

import styles from '../../styles/modules/Locations.module.scss';
import locationsImg from '../../public/assets/locations-illustration.svg';
import SearchBar from '@/components/SearchBar';
import CustomFilter from '@/components/CustomFilter';
import { dimensions, locationTypes } from '@/constants';
import LocationCard from '@/components/TextCard';
import Button from '@/components/Button';

const page = () => {
  return (
    <main className={styles.main}>
      <Image
        src={locationsImg}
        width={326}
        height={202}
        alt="Locations illustration"
        className={styles.locationsImage}
      />

      <div className={styles.inputsWrapper}>
        <SearchBar placeholder="Filter by name..." />
        <CustomFilter title='Types' options={locationTypes} />
        <CustomFilter title='Dimension' options={dimensions} />
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.cardsWrapper}>
          <LocationCard title="Earth (C-137)" type="Planet" url='/location/details' />
          <LocationCard title="Earth (C-137)" type="Planet" url='/location/details' />
          <LocationCard title="Earth (C-137)" type="Planet" url='/location/details' />
          <LocationCard title="Earth (C-137)" type="Planet" url='/location/details' />
          <LocationCard title="Earth (C-137)" type="Planet" url='/location/details' />
          <LocationCard title="Earth (C-137)" type="Planet" url='/location/details' />
          <LocationCard title="Earth (C-137)" type="Planet" url='/location/details' />
          <LocationCard title="Earth (C-137)" type="Planet" url='/location/details' />
          <LocationCard title="Earth (C-137)" type="Planet" url='/location/details' />
          <LocationCard title="Earth (C-137)" type="Planet" url='/location/details' />
          <LocationCard title="Earth (C-137)" type="Planet" url='/location/details' />
          <LocationCard title="Earth (C-137)" type="Planet" url='/location/details' />
        </div>
        
      </div>

      <Button title="LOAD MORE" />
    </main>
  )
}

export default page