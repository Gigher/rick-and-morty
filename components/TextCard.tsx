"use client";

import { LocationCardProps } from '@/types'
import { useRouter } from 'next/navigation';
import { Roboto } from 'next/font/google';

import styles from "../styles/modules/TextCard.module.scss"

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ["latin"] });

const TextCard = ({ title, type, date, episode, url }: LocationCardProps) => {
  const router = useRouter();

  return (
    <div className={styles.cardWrapper} onClick={() => router.push(url)}>
        <h3 className={`${styles.cardTitle} ${roboto.className}`}>{title}</h3>
        <p className={`${styles.cardSubtitle} ${roboto.className}`}>{type}</p>
        <p className={`${styles.cardSubtitle} ${roboto.className}`}>{date}</p>
        <p className={`${styles.cardEpisode} ${roboto.className}`} >{episode}</p>
    </div>
  )
}

export default TextCard