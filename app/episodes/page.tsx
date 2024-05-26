import Image from 'next/image';
import React from 'react';

import styles from "@/styles/modules/Episodes.module.scss";
import episodesImage from "@/public/assets/episodes-illustration.svg";
import SearchBar from '@/components/SearchBar';
import TextCard from '@/components/TextCard';
import Button from '@/components/Button';

const page = () => {
  return (
    <>
      <div className={styles.contentWrapper}>
        <Image
          src={episodesImage}
          alt='Episodes Illustration'
          width={270}
          height={210}
          className={styles.episodesImage}
        />

        <div className={styles.inputWrapper}>
          <SearchBar placeholder="Filter by name or episode (ex. S01 or S01E02)" />
        </div>

        <div className={styles.cardsWrapper}>
          <TextCard title='Pilot' date='December 2, 2013' episode='SE01E01' url='/episode/details' />
          <TextCard title='Pilot' date='December 2, 2013' episode='SE01E01' url='/episode/details' />
          <TextCard title='Pilot' date='December 2, 2013' episode='SE01E01' url='/episode/details' />
          <TextCard title='Pilot' date='December 2, 2013' episode='SE01E01' url='/episode/details' />
          <TextCard title='Pilot' date='December 2, 2013' episode='SE01E01' url='/episode/details' />
          <TextCard title='Pilot' date='December 2, 2013' episode='SE01E01' url='/episode/details' />
          <TextCard title='Pilot' date='December 2, 2013' episode='SE01E01' url='/episode/details' />
          <TextCard title='Pilot' date='December 2, 2013' episode='SE01E01' url='/episode/details' />
          <TextCard title='Pilot' date='December 2, 2013' episode='SE01E01' url='/episode/details' />
          <TextCard title='Pilot' date='December 2, 2013' episode='SE01E01' url='/episode/details' />
          <TextCard title='Pilot' date='December 2, 2013' episode='SE01E01' url='/episode/details' />
          <TextCard title='Pilot' date='December 2, 2013' episode='SE01E01' url='/episode/details' />
        </div>

        <Button title="LOAD MORE" />
      </div>
      
    </>
  )
}

export default page;