import { ButtonProps } from '@/types';
import React from 'react';
import { Roboto } from 'next/font/google';

import styles from "../styles/modules/Button.module.scss";

const roboto = Roboto({ weight: ['500'], subsets: ["latin"] });

const Button = ({ title }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${roboto.className}`}>
        {title}
    </button>
  )
}

export default Button