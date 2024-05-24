import Image from "next/image";
import { Description, Field, Label, Select } from '@headlessui/react';
import { Roboto } from "next/font/google";

import styles from "../styles/modules/Page.module.scss";

import pageIllustration from '../public/assets/characters-illustration.svg';
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCharacters } from "@/utils";
import { genders, species, statuses } from "@/constants";


const roboto = Roboto({ weight: ['400', '700'], subsets: ["latin"] });

export default async function Home() {
  const allCharacters = await fetchCharacters();
  const allCharactersArray = Object.values(allCharacters);

  console.log(typeof(allCharacters));

  return (
    <main className={`${styles.container} ${roboto.className}`}>
      <div className={styles.contentWrapper}>
        <Image 
          src={pageIllustration}
          alt="Illustration"
          width={600}
          height={200}
        />

        <div className={styles.inputsContainer}>
          <SearchBar />

          <CustomFilter title="Species" options={species} />

          <CustomFilter title="Gender" options={genders}  />

          <CustomFilter title="Status" options={statuses} />
        </div>
        
        {/* {Array.isArray(allCharacters) && allCharacters.map((character) => <Card imgUrl={character.Img} characterName={character.Name} species={character.Species} />)} */}

        <div className={styles.cards}>
          <Card
            imgUrl="../public/assets/rick-placeholder.svg"
            characterName="Rick Sanchez"
            species="Human"
          />
          
          <Card
            imgUrl="../public/assets/rick-placeholder.svg"
            characterName="Rick Sanchez"
            species="Human"
          />

          <Card
            imgUrl="../public/assets/rick-placeholder.svg"
            characterName="Rick Sanchez"
            species="Human"
          />

          <Card
            imgUrl="../public/assets/rick-placeholder.svg"
            characterName="Rick Sanchez"
            species="Human"
          />

          <Card
            imgUrl="../public/assets/rick-placeholder.svg"
            characterName="Rick Sanchez"
            species="Human"
          />

          <Card
            imgUrl="../public/assets/rick-placeholder.svg"
            characterName="Rick Sanchez"
            species="Human"
          />

          <Card
            imgUrl="../public/assets/rick-placeholder.svg"
            characterName="Rick Sanchez"
            species="Human"
          />

          <Card
            imgUrl="../public/assets/rick-placeholder.svg"
            characterName="Rick Sanchez"
            species="Human"
          />
        </div>
      </div>

      
    </main>
  );
}
