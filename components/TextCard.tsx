"use client";

import { LocationCardProps } from '@/types'
import { useRouter } from 'next/navigation';

import styles from "../styles/modules/TextCard.module.scss"

const TextCard = ({ title, type, date, episode, url }: LocationCardProps) => {
    const router = useRouter();

  return (
    <div className={styles.cardWrapper} onClick={() => router.push(url)}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardSubtitle}>{type}</p>
        <p className={styles.cardSubtitle}>{date}</p>
        <p className={styles.cardEpisode}>{episode}</p>
    </div>
  )
}

export default TextCard