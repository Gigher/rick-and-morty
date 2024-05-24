"use client";

import Image from 'next/image';
import React from 'react';
import { Roboto } from 'next/font/google';

import styles from '../styles/modules/Card.module.scss';
import rickImg from '../public/assets/rick-placeholder.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface cardTypes {
    imgUrl: string;
    characterName: string;
    species: string;
}

const roboto = Roboto({ weight: ['400', '500'], subsets: ["latin"] });

const Card = ({ imgUrl, characterName, species }: cardTypes) => {
    const router = useRouter();
    
    return (
        <div onClick={() => router.push('/character/details')} className={`${styles.cardWrapper}`}>
            <Image 
                src={rickImg}
                alt={characterName}
                width={240}
                height={168}
            />

            <div className={styles.textWrapper}>
                <h4 className={`${roboto.className} ${styles.cardTitle}`}>{characterName}</h4>
                <p className={`${roboto.className} ${styles.cardSubtitle}`}>{species}</p>
            </div>
        </div>
    )
}

export default Card